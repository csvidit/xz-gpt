import Markdown from "markdown-to-jsx";
import UserPromptItem from "../Chat/UserPromptItem";
import { Key } from "react";
import BotResponseItem from "../Chat/BotResponseItem";

const MultiChatHistoryItem = (props: {key: any, id: any, label: any, children: any, username: string | null | undefined}) => {

  const labelToDisplay: string = props.label.length > 100 ? props.label.substring(0, 100)+"..." : props.label;
  console.log(props.key);
  return (
    <div className="flex flex-col items-center font-sans">
      <label htmlFor={"my-modal-"+props.id} className="btn text-neutral-900 font-normal capitalize p-4 bg-neutral-900 bg-opacity-10 hover:bg-opacity-30 border-0 rounded-2xl h-14 w-full lg:w-1/2">
        {labelToDisplay}
      </label>
      <input type="checkbox" id={"my-modal-"+props.id} className="modal-toggle" />
      <div className="modal text-neutral-200 backdrop-blur-md">
        <div className="modal-box relative bg-neutral-900 bg-opacity-50">
          <label
            htmlFor={"my-modal-"+props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {props.label}
          </h3>
          <p className="py-4">
            {props.children.map((x: { role: string; content: any; }, index: Key | null | undefined) => {
                if(index === 0)
                {
                    return "";
                }
                if(x.role === "user")
                {
                    return <UserPromptItem variant="history" key={index} username={props.username}>{x.content}</UserPromptItem>
                }
                else
                {
                    return <BotResponseItem variant="history" key={index}>{x.content}</BotResponseItem>
                }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiChatHistoryItem;
