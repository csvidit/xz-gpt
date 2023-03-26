import { HiCog } from "react-icons/hi2";
import ChatItemContainer from "./ChatItemContainer";
import ChatTextContent from "./ChatTextContent";
import { Dispatch, SetStateAction, useState } from "react";

const SystemMessageItem = (props: {currentMessage: string, messageChanger: Dispatch<SetStateAction<string>>}) => {
    function handleMessageChange(event: {
        target: { value: SetStateAction<string> };
      }) {
        props.messageChanger(event.target.value);
      }

  return (
    <ChatItemContainer>
      <div className="flex flex-col items-start font-medium text-emerald-800 text-lg bg-emerald-600 bg-opacity-30 p-2 rounded-l-xl select-none">
        <HiCog />
        <p className="w-32">System Message</p>
      </div>
      <textarea
        className="prompt textarea font-sans text-base p-2 lg:p-4 rounded-r-xl rounded-l-none w-full bg-transparent focus:ring-2 focus:border-emerald-600 placeholder-emerald-700"
        placeholder="Write your system message here..."
        onChange={handleMessageChange}
        value={props.currentMessage}
      ></textarea>
    </ChatItemContainer>
  );
};

export default SystemMessageItem;
