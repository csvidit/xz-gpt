import { HiUserCircle } from "react-icons/hi2";
import ChatItemContainer from "./ChatItemContainer";
import ChatTextContent from "./ChatTextContent";
import ChatItemLabel from "./ChatItemLabel";

const UserPromptItem = (props: {
  username: string | null | undefined;
  children: any;
  variant: string
}) => {
  const username =
    props.username === null || props.username === undefined
      ? "User"
      : props.username;

  return (
    <ChatItemContainer variant="user">
      <ChatItemLabel variant="user" type={props.variant} content={username}/>
      <ChatTextContent>{props.children}</ChatTextContent>
    </ChatItemContainer>
  );
};

export default UserPromptItem;
