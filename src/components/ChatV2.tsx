import { openai } from "@/openai.config";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { HiArrowRight, HiArrowUturnLeft } from "react-icons/hi2";
import { db } from "@/firebase.config";
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import LoadingSmall from "./LoadingSmall";
import UserPromptItem from "./UserPromptItem";
import BotResponseItem from "./BotResponseItem";
import SystemMessageItem from "./SystemMessageItem";
import {
  ChatCompletionRequestMessage,
} from "openai";
import ChatV2Container from "./ChatV2Container";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ChatV2 = (props: { user: UserProfile | undefined }) => {
  
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

  const gptModel = props.user?.sub === process.env.NEXT_PUBLIC_VIDITKHANDELWAL_USER_ID ? "gpt-4-0314" : "gpt-3.5-turbo";

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
        content: completion!.data!.choices[0]!.message!.content,
      });
      setCurrentConversation(newConversation);
      setIsLoading(false);
      setResponse(completion!.data!.choices[0]!.message!.content);
    }
  };

  return (
    <ChatV2Container>
      {/* <SystemMessageItem
        currentMessage={systemMessage}
        messageChanger={setSystemMessage}
      /> */}
      <div className="flex flex-row space-x-2 justify-center items-center pt-1 pb-1 pl-3 pr-3 w-fit mb-5 text-xs lowercase rounded-full border border-neutral-900">
        <AiOutlineInfoCircle />
        <p>to make sure that your current conversation is recorded, click the reset chat button before leaving.</p>
      </div>
      <div className="responses rounded-xl h-80 lg:h-96 overflow-scroll">
        {currentConversation.map((x, index) => {
          if (x.role === "user") {
            return (
              <UserPromptItem username={props.user?.nickname} key={index} variant="chat">
                {x.content}
              </UserPromptItem>
            );
          } else if (x.role === "assistant") {
            return <BotResponseItem key={index} variant="chat">{x.content}</BotResponseItem>;
          }
        })}
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <textarea
          className="prompt textarea font-sans text-base p-2 lg:p-4 rounded-xl w-full resize-none bg-slate-900 bg-opacity-10 shadow-md shadow-blue-700 focus:ring-2 focus:border-blue-700 placeholder-blue-700 caret-blue-700"
          placeholder="Write your prompt here..."
          onChange={handlePromptChange}
          value={prompt}
        ></textarea>
        <div className="flex flex-row space-x-4 justify-between items-center">
          <div className="flex flex-row justify-start items-center space-x-4">
            {!isLoading && (
              <button
                type="button"
                onClick={() => generate()}
                className="flex flex-row lg:space-x-2 items-center pt-1 pb-1 pl-4 pr-4 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-neutral-900 hover:text-blue-400 transition-colors"
              >
                <p className="hidden lg:flex">send prompt</p>

                <HiArrowRight />
              </button>
            )}

            {!isLoading && (
              <div className="form-control">
                <label className="cursor-pointer label flex-row space-x-1 items-center">
                  <span className="label-text text-neutral-900 text-base">
                    humanize?
                  </span>
                  <input
                    data-theme="dracula"
                    type="checkbox"
                    className="toggle toggle-primary bg-neutral-200 checked:bg-blue-500"
                    onChange={() => setHumanize(!humanize)}
                    checked={humanize}
                  />
                </label>
              </div>
            )}
            {isLoading && (
              <div className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full border border-neutral-900">
                <p>response in progress</p>
                <LoadingSmall />
              </div>
            )}
          </div>

          {!isLoading && (
            <button
              type="button"
              onClick={() => handleResetChat()}
              className="flex flex-row lg:space-x-2 justify-center items-center pt-1 pb-1 pl-4 pr-4 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              <p className="hidden lg:flex">reset chat</p>

              <HiArrowUturnLeft />
            </button>
          )}
        </div>
      </div>
    </ChatV2Container>
  );
};

export default ChatV2;
