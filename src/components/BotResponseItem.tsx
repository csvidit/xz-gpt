import { CgBot } from "react-icons/cg";
import { HiSparkles } from "react-icons/hi";
import ChatTextContent from "./ChatTextContent";
import ChatItemContainer from "./ChatItemContainer";
import ChatItemLabel from "./ChatItemLabel";

const BotResponseItem = (props: { children: any , variant: string}) => {
  return (
    <ChatItemContainer>
      <ChatItemLabel variant="bot" type={props.variant} content={undefined}/>
      <ChatTextContent>{props.children}</ChatTextContent>
    </ChatItemContainer>
  );
};

export default BotResponseItem;
