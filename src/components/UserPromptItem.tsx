import { HiUserCircle } from "react-icons/hi2";
import ChatItemContainer from "./ChatItemContainer";
import ChatTextContent from "./ChatTextContent";
import ChatItemLabel from "./ChatItemLabel";

const UserPromptItem = (props: {
  username: string | null | undefined;
  children: any;
}) => {
  const username =
    props.username === null || props.username === undefined
      ? "User"
      : props.username;

  return (
    <ChatItemContainer>
      <ChatItemLabel variant="user" content={username}/>
      <ChatTextContent>{props.children}</ChatTextContent>
    </ChatItemContainer>
  );
};

export default UserPromptItem;
