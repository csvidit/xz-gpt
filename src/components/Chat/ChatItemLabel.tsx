import { HiSparkles, HiUserCircle } from "react-icons/hi2";

const ChatItemLabel = (props: {
  variant: string;
  type: string;
  content: string | null | undefined;
}) => {
  if (props.variant === "bot") {
    if (props.type === "history") {
      return (
        <div className="flex flex-col items-start font-medium text-violet-100 text-lg bg-violet-700 bg-opacity-40 rounded-md select-none">
          <div className="sticky top-0 p-2">
            <HiSparkles />
            {/* <div className="w-20 flex flex-row space-x-1">
              <p>Xzayvian</p>
              <p className="font-light"></p>
            </div> */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-start font-medium text-violet-100 text-lg bg-violet-700 bg-opacity-40 rounded-md select-none">
          <div className="sticky top-0 p-2">
            <HiSparkles />
            {/* <div className="w-20 flex flex-row space-x-1">
              <p>Xzayvian</p>
              <p className="font-light"></p>
            </div> */}
          </div>
        </div>
      );
    }
  } else {
    if (props.type === "history") {
      return (
        <div className="flex flex-col items-start font-medium text-blue-100 text-lg bg-blue-700 bg-opacity-40 rounded-md select-none">
          <div className="sticky top-0 p-2">
            <HiUserCircle />
            {/* <p className="w-20">{props.content}</p> */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-start font-medium text-blue-100 text-lg bg-blue-700 bg-opacity-40 rounded-md select-none">
          <div className="sticky top-0 p-2">
            <HiUserCircle />
            {/* <p className="w-20">{props.content}</p> */}
          </div>
        </div>
      );
    }
  }
};

export default ChatItemLabel;
