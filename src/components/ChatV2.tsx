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
import Markdown from "markdown-to-jsx";
import UserPromptItem from "./UserPromptItem";
import BotResponseItem from "./BotResponseItem";

const ChatV2 = (props: { user: UserProfile | undefined }) => {
  const [currentConversation, setCurrentConversation] = useState([{prompt: "User Prompt", response: "Bot Response"}]);
  const [response, setResponse] = useState("Give a prompt to get a response.");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [humanize, setHumanize] = useState(false);
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
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: request.toString() }],
      });
      if (prompt != "" && prompt != " ") {
        const res = completion.data;
        const userRef = doc(db, "users", props.user!.sub!.toString());
        const newEntry = { request: request.toString(), response: res };
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userHistoryUpdate = await updateDoc(userRef, {
            history: arrayUnion(newEntry),
          });
        } else {
          const docData = { history: [] };
          const setNewDoc = await setDoc(userRef, docData);
          const userHistoryUpdate = await updateDoc(userRef, {
            history: arrayUnion(newEntry),
          });
        }
      }
      setIsLoading(false);
      setResponse(completion!.data!.choices[0]!.message!.content);
    }
  };

  return (
    <div className="mt-10 w-full lg:w-1/2 flex flex-col space-y-5">
      {!isLoading && (
        <button
          type="button"
          onClick={() => generate()}
          className="flex flex-row space-x-2 justify-center items-center pt-1 pb-1 pl-4 pr-4 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-neutral-900 transition-colors"
        >
          <p>reset chat</p>
          <span className="text-neutral-200">
            <HiArrowUturnLeft />
          </span>
        </button>
      )}
      <div className="responses rounded-xl h-96 overflow-scroll">
        {currentConversation.map((x: {prompt: string, response: string}, index) => {
          return (
            <div key={index}>
              <UserPromptItem>{x.prompt}</UserPromptItem>
              <BotResponseItem>{x.response}</BotResponseItem>
            </div>
          );
        })}
      </div>
      <textarea
        className="prompt textarea font-sans text-base p-2 lg:p-4 rounded-xl w-full bg-slate-900 bg-opacity-10 focus:ring-2 focus:border-blue-600 placeholder-blue-600"
        placeholder="Write your prompt here..."
        onChange={handlePromptChange}
        value={prompt}
      ></textarea>
      <div className="flex flex-row space-x-5 justify-between items-center">
        {!isLoading && (
          <button
            type="button"
            onClick={() => generate()}
            className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-4 pr-4 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-neutral-900 transition-colors"
          >
            <p>send prompt</p>
            <span className="text-neutral-200">
              <HiArrowRight />
            </span>
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
    </div>
  );
};

export default ChatV2;
