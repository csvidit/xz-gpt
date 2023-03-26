import { HiUserCircle } from "react-icons/hi2";
import ChatItemContainer from "./ChatItemContainer";
import ChatTextContent from "./ChatTextContent";

const UserPromptItem = (props: {children: any}) => {
  return (
    <ChatItemContainer>
      <div className="flex flex-col items-start font-medium text-blue-800 text-lg bg-blue-600 bg-opacity-30 p-2 rounded-l-xl select-none">
        <HiUserCircle/>
        <p className="w-16">User</p>
      </div>
      <ChatTextContent>
        {props.children}
      </ChatTextContent>
    </ChatItemContainer>
  );
};

export default UserPromptItem;
