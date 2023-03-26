import { HiUserCircle } from "react-icons/hi2";
import ChatItemContainer from "./ChatItemContainer";
import ChatTextContent from "./ChatTextContent";

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
      <div className="flex flex-col items-start font-medium text-blue-800 text-lg bg-blue-600 bg-opacity-30 rounded-l-xl select-none">
        <div className="sticky top-0 p-2">
          <HiUserCircle />
          <p className="w-20">{username}</p>
        </div>
      </div>
      <ChatTextContent>{props.children}</ChatTextContent>
    </ChatItemContainer>
  );
};

export default UserPromptItem;
