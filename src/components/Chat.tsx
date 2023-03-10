import { openai } from "@/openai.config";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
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

const Chat = (props: { user: UserProfile | undefined }) => {
  const [response, setResponse] = useState("Give a prompt to get a response.");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [humanize, setHumanize] = useState(false);
  function handlePromptChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setPrompt(event.target.value);
  }
  function handleHumanizeChange(event: any){
    setHumanize(!humanize)
    console.log("Humanize Value "+humanize.valueOf());
  }

  useEffect(() => {
    console.log("Humanize Value "+humanize.valueOf());
  }, [humanize])

  const generate = async () => {
    console.log(prompt);
    if (prompt == null || prompt == "" || prompt == " ") {
      setResponse("GIVE A PROMPT TO GET A RESPONSE!");
      return;
    } else {
      setResponse("Response in progress...");
      setIsLoading(true);
      let request = prompt;
      if(humanize)
      {
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
      <textarea
        className="prompt textarea font-sans p-2 lg:p-4 rounded-xl w-full bg-slate-900 bg-opacity-10 focus:border-2 focus:border-blue-500 placeholder-blue-500"
        placeholder="Write your prompt here..."
        onChange={handlePromptChange}
        value={prompt}
      ></textarea>
      <div className="flex flex-row space-x-5 justify-between items-center">
        {!isLoading && (
          <button
            type="button"
            onClick={() => generate()}
            className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-neutral-900"
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
              <span className="label-text text-neutral-900 text-base">humanize?</span>
              <input
                type="checkbox"
                className="toggle bg-neutral-200 checked:bg-blue-500"
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
      <div className="p-2 lg:p-4 font-sans bg-slate-900 bg-opacity-10 rounded-xl h-96 overflow-scroll">
        <Markdown>{response}</Markdown>
      </div>
    </div>
  );
};

export default Chat;
