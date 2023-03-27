import { HiSparkles, HiUserCircle } from "react-icons/hi2";

const ChatItemLabel = (props: { variant: string; content: string | null | undefined}) => {
  if (props.variant === "bot") {
    return (
      <div className="flex flex-col items-start font-medium text-purple-800 text-lg bg-purple-600 bg-opacity-30 rounded-l-xl select-none">
        <div className="sticky top-0 p-2">
          <HiSparkles />
          <div className="w-20 flex flex-row space-x-1">
            <p>Xzayvian</p>
            <p className="font-light"></p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="flex flex-col items-start font-medium text-blue-800 text-lg bg-blue-600 bg-opacity-30 rounded-l-xl select-none">
        <div className="sticky top-0 p-2">
          <HiUserCircle />
          <p className="w-20">{props.content}</p>
        </div>
      </div>
    );
  }
};

export default ChatItemLabel;
