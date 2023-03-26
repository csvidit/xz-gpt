import { CgBot } from "react-icons/cg";
import { HiSparkles } from "react-icons/hi";
import ChatTextContent from "./ChatTextContent";
import ChatItemContainer from "./ChatItemContainer";

const BotResponseItem = (props: { children: any }) => {
  return (
    <ChatItemContainer>
      <div className="flex flex-col items-start font-medium text-purple-800 text-lg bg-purple-600 bg-opacity-30 rounded-l-xl select-none">
        <div className="sticky top-0 p-2">
          <HiSparkles />
          <div className="w-20 flex flex-row space-x-1">
            <p>Xzayvian</p>
            <p className="font-light"></p>
          </div>
        </div>
      </div>
      <ChatTextContent>{props.children}</ChatTextContent>
    </ChatItemContainer>
  );
};

export default BotResponseItem;
