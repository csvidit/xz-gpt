import { openai } from "@/openai.config";
import Link from "next/link";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

const Chat = () => {
  const [response, setResponse] = useState("GIVE A PROMPT TO GET A RESPONSE");

  const generate = async (input) => {
    console.log(document.getElementsByClassName("prompt")[0].textContent);
    if (input == null) {
      setResponse("GIVE A PROMPT TO GET A RESPONSE!");
      return;
    }
    else
    {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: input }],
      });
      console.log(completion.data);
      setResponse(completion.data.choices[0].message.content);
    }
  };

  return (
    <div className="mt-10 w-full lg:w-1/2 flex flex-col space-y-5">
      <textarea
        className="prompt textarea font-sans p-2 lg:p-4 rounded-xl w-full bg-slate-100 bg-opacity-10 focus:border-2 focus:border-blue-500 placeholder-blue-500"
        placeholder="Write your prompt here..."
      ></textarea>
      <button
        type="button"
        onClick={() =>
          generate(document.getElementsByClassName("prompt")[0].textContent)
        }
        href="/api/auth/logout"
        className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-purple-900 bg-opacity-50 text-purple-200 hover:bg-slate-900"
      >
        <p>send prompt</p>
        <span className="text-purple-500">
          <HiArrowRight />
        </span>
      </button>
      <p className=" p-2 lg:p-4 font-sans bg-slate-100 bg-opacity-10 rounded-xl">
        {response}
      </p>
    </div>
  );
};

export default Chat;
