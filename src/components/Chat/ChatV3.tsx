import { openai } from "@/openai.config";
import { SetStateAction, useEffect, useState } from "react";
import { HiArrowRight, HiArrowUturnLeft, HiTrash } from "react-icons/hi2";
import { db } from "@/firebase.config";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import LoadingSmall from "../Loading/LoadingSmall";
import UserPromptItem from "./UserPromptItem";
import BotResponseItem from "./BotResponseItem";
import { ChatCompletionRequestMessage } from "openai";
import ChatV2Container from "./ChatV2Container";
import ChatV3Container from "./ChatV3Container";
import { PiArrowRight, PiArrowRightFill, PiTrashDuotone } from "react-icons/pi";

const ChatV3 = (props: { user: UserProfile | undefined }) => {
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
      setIsLoading(false);
      setResponse(completion!.data!.choices[0]!.message!.content!);
    }
  };

  return (
    <ChatV3Container>
      <div className="responses rounded-md overflow-scroll h-80 lg:h-96">
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
      <div className="flex flex-col space-y-2 lg:space-y-4 w-full fixed bottom-0 left-0 bg-violet-600 border-t border-t-violet-700 bg-opacity-10 backdrop-blur-md px-5 py-2.5 lg:px-10 lg:py-5">
        <div className="flex flex-row space-x-4 items-center w-full h-full">
          <textarea
            className="textarea w-5/6 text-neutral-100 max-h-64 text-base p-2 lg:p-4 rounded-md resize-none bg-neutral-900 border border-neutral-800 bg-opacity-80 shadow-md focus:ring-offset focus:ring-offset-violet-500 focus:ring-opacity-40 focus:border-violet-500 placeholder-violet-500 caret-neutral-400"
            placeholder="Write your prompt here..."
            onChange={handlePromptChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generate();
              }
            }}
            value={prompt}
          ></textarea>
          <input
            placeholder="Upload File"
            type="file"
            className="flex flex-col space-y-2 h-max w-1/6 resize-none rounded-md p-2 lg:p-4 bg-neutral-900 border border-neutral-800 bg-opacity-80 shadow-md focus:ring-offset focus:ring-offset-violet-500 focus:ring-opacity-40 focus:border-violet-500 placeholder-violet-500"
          ></input>
        </div>
        <div className="flex flex-row space-x-4 justify-between items-center">
          <div className="flex flex-row justify-start items-center space-x-4">
            {!isLoading && (
              // <ButtonSendPrompt onClick={() => generate()}/>
              <div className="group w-fit h-fit p-[0.75px] rounded-md bg-gradient-to-tr from-violet-700 to-violet-100 via-violet-400 from-60% flex flex-row items-center">
                <button
                  type="button"
                  onClick={() => generate()}
                  className="px-4 py-1 flex flex-row lg:space-x-2 items-center w-full h-fulllowercase rounded-md bg-gradient-to-b from-violet-950 to-violet-700 hover:shadow-inner hover:shadow-violet-500 transition-all duration-200 ease-in-out text-neutral-100"
                >
                  <p className="hidden lg:flex">send prompt</p>
                  <PiArrowRightFill className="hidden group-hover:flex"/>
                  <PiArrowRight className="flex group-hover:hidden" />
                </button>
              </div>
            )}

            {!isLoading && (
              <div className="form-control">
                <label className="cursor-pointer label flex-row space-x-1 items-center">
                  <span className="label-text text-neutral-100 text-base">
                    humanize?
                  </span>
                  <input
                    data-theme="dracula"
                    type="checkbox"
                    className="toggle toggle-primary bg-neutral-200 checked:bg-violet-500"
                    onChange={() => setHumanize(!humanize)}
                    checked={humanize}
                  />
                </label>
              </div>
            )}
            {isLoading && (
              <div className="flex flex-row space-x-2 items-center px-4 py-1 w-fit lowercase rounded-md border border-neutral-900">
                <p>response in progress</p>
                <LoadingSmall />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-start items-center space-x-4">
            {" "}
            {!isLoading && (
              <button
                type="button"
                onClick={() => handleResetChat()}
                className="flex flex-row lg:space-x-2 justify-center items-center px-4 py-1 w-fit lowercase rounded-md bg-neutral-900 bg-opacity-60 text-neutral-100 hover:bg-opacity-100 hover:text-amber-400 transition-colors"
              >
                <p className="hidden lg:flex">save and reset chat</p>

                <HiArrowUturnLeft />
              </button>
            )}
            {!isLoading && (
              <button
                type="button"
                onClick={() => handleDeleteChat()}
                className="flex flex-row lg:space-x-2 justify-center items-center px-4 py-1 w-fit lowercase rounded-md bg-transparent bg-opacity-50 border border-red-500 text-red-500 hover:bg-neutral-900 hover:border-red-900 transition-colors"
              >
                <p className="hidden lg:flex">delete chat</p>

                <PiTrashDuotone />
              </button>
            )}
          </div>
        </div>
        <p className="text-violet-400 text-xs">
          &copy; {new Date().getFullYear()} Vidit Khandelwal. All rights
          reserved.
        </p>
      </div>
    </ChatV3Container>
  );
};

export default ChatV3;
