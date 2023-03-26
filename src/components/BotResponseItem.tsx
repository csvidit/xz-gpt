import { CgBot } from "react-icons/cg";
import ChatTextContent from "./ChatTextContent";
import ChatItemContainer from "./ChatItemContainer";

const BotResponseItem = (props: { children: any }) => {
  return (
    <ChatItemContainer>
      <div className="flex flex-col items-start font-medium text-purple-800 text-lg bg-purple-600 bg-opacity-30 p-2 rounded-l-xl select-none">
        <CgBot/>
        <div className="w-16 flex flex-row space-x-1">
          <p>XZ</p>
          <p className="font-light">GPT</p>
        </div>
      </div>
      <ChatTextContent>
        {props.children}
      </ChatTextContent>
    </ChatItemContainer>
  );
};

export default BotResponseItem;
