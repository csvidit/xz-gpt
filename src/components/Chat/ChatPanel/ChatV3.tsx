import { openai } from "@/openai.config";
import { SetStateAction, useEffect, useState } from "react";
import { HiArrowRight, HiArrowUturnLeft, HiTrash } from "react-icons/hi2";
import { db } from "@/firebase.config";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import LoadingSmall from "../../Loading/LoadingSmall";
import UserPromptItem from "../UserPromptItem";
import BotResponseItem from "../BotResponseItem";
import { ChatCompletionRequestMessage } from "openai";
import { PiArrowRight, PiArrowRightFill, PiTrashDuotone } from "react-icons/pi";
import Button from "@/components/Buttons/Button";
import ButtonSendPrompt from "./Input/ButtonSendPrompt";
import HumanizeToggle from "./Input/HumanizeToggle";
import ButtonDeleteChat from "./Input/ButtonDeleteChat";
import ButtonAddFile from "./Input/ButtonAddFile";
import ResponsesContainer from "../ResponsesContainer";
import ResponseLoading from "./Input/ResponseLoading";

const ChatV3 = (props: {
  showHistory: boolean;
  user: UserProfile | undefined;
}) => {
  const [currentConversation, setCurrentConversation] = useState<
    ChatCompletionRequestMessage[]
  >([
    {
      role: "system",
      content:
        "You are Xzayvian GPT, an AI chatbot based on OpenAI's GPT 3.5 Turbo LLM. You were made by Vidit Khandelwal, a student at DePauw University. You are very friendly. If there is some request that is beyond your abilities, you still try your best to give a good response to the user, and do not refuse to answer.",
    },
  ]);
  const [response, setResponse] = useState("Give a prompt to get a response.");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [humanize, setHumanize] = useState(false);

  const gptModel =
    props.user?.sub === process.env.NEXT_PUBLIC_VIDITKHANDELWAL_USER_ID
      ? "gpt-4-0314"
      : "gpt-3.5-turbo";

  //   const [systemMessage, setSystemMessage] = useState(
  //     "This is the system message"
  //   );
  function handlePromptChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setPrompt(event.target.value);
  }
  function handleHumanizeChange(event: any) {
    setHumanize(!humanize);
    console.log("Humanize Value " + humanize.valueOf());
  }

  useEffect(() => {
    console.log("Humanize Value " + humanize.valueOf());
  }, [humanize]);

  const handleResetChat = async () => {
    const userRef = doc(db, "users", props.user!.sub!.toString());
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const userHistoryUpdate = await updateDoc(userRef, {
        // history_multi_chat: arrya(JSON.stringify(currentConversation)),
        history_multi_chat: arrayUnion(JSON.stringify(currentConversation)),
      });
    } else {
      const docData = { history_multi_chat: [] };
      const setNewDoc = await setDoc(userRef, docData);
      const userHistoryUpdate = await updateDoc(userRef, {
        history_multi_chat: arrayUnion(JSON.stringify(currentConversation)),
      });
    }
    setCurrentConversation([]);
  };

  const handleDeleteChat = () => {
    setCurrentConversation([]);
  };

  const generate = async () => {
    console.log(prompt);
    if (prompt == null || prompt == "" || prompt == " ") {
      setResponse("GIVE A PROMPT TO GET A RESPONSE!");
      return;
    } else {
      setResponse("Response in progress...");
      setIsLoading(true);
      let request = prompt;
      if (humanize) {
        request += ". I want you to humanize your response";
      }
      let newConversation = currentConversation;
      newConversation.push({ role: "user", content: request });
      setCurrentConversation(newConversation);
      const completion = await openai.createChatCompletion({
        model: gptModel,
        messages: currentConversation,
      });
      newConversation.push({
        role: "assistant",
        content: completion!.data!.choices[0]!.message!.content!,
      });
      setCurrentConversation(newConversation);
      setPrompt("");
      setIsLoading(false);
      setResponse(completion!.data!.choices[0]!.message!.content!);
    }
  };

  return (
    <section className="flex flex-col space-y-4 w-9/12 h-full justify-between">
      <ResponsesContainer>
        <div
          id="responses"
          className="px-4 bg-neutral-900 bg-opacity-60 backdrop-blur-md border border-neutral-800 rounded-md overflow-scroll max-h-max"
        >
          {currentConversation.map((x, index) => {
            if (x.role === "user") {
              return (
                <UserPromptItem
                  username={props.user?.nickname}
                  key={index}
                  variant="chat"
                >
                  {x.content}
                </UserPromptItem>
              );
            } else if (x.role === "assistant") {
              return (
                <BotResponseItem key={index} variant="chat">
                  {x.content}
                </BotResponseItem>
              );
            }
          })}
        </div>
      </ResponsesContainer>
      <div
        className={`grow-0 flex flex-col space-y-2 lg:space-y-4 bottom-0 right-0 border rounded-md bg-neutral-900 bg-opacity-40 border-neutral-800 backdrop-blur-md p-2 lg:p-4 ${
          props.showHistory ? "border-t" : "border-t border-l rounded-tl-md"
        }`}
      >
        <div className="flex flex-row space-x-4 items-center w-full h-full">
          <textarea
            spellCheck="false"
            className="textarea w-5/6 text-neutral-100 h-20 text-base p-2 lg:p-4 rounded-md resize-none bg-neutral-900 border border-neutral-800 bg-opacity-80 shadow-md focus:ring-offset focus:ring-offset-violet-500 focus:ring-opacity-40 focus:border-violet-500 placeholder-violet-500 caret-neutral-400 selection:bg-neutral-600"
            placeholder="Write your prompt here..."
            onChange={handlePromptChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generate();
              }
            }}
            value={prompt}
          ></textarea>
          <ButtonAddFile />
        </div>
        <div className="flex flex-row space-x-4 justify-between items-center">
          <div className="flex flex-row justify-start items-center space-x-4">
            {!isLoading && (
              <ButtonSendPrompt
                onClick={() => {
                  generate();
                }}
              />
            )}

            {!isLoading && (
              <HumanizeToggle
                onChange={(event) => {
                  handleHumanizeChange(event);
                }}
                checked={humanize}
              />
            )}
            {isLoading && <ResponseLoading />}
          </div>
          <div className="flex flex-row justify-start items-center space-x-4">
            {!isLoading && <ButtonDeleteChat chatId={props.user?.sub!} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatV3;

// bg-violet-600 border-t border-t-violet-700 bg-opacity-10
