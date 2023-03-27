import Markdown from "markdown-to-jsx";

const MultiChatHistoryItem = (props: {key: any, id: string | null | undefined, label: string, children: any}) => {

  const labelToDisplay: string = props.label.length > 100 ? props.label.substring(0, 100)+"..." : props.label;
  console.log(props.key);
  return (
    <div className="flex flex-col items-center font-sans">
      <label htmlFor={"my-modal-"+props.id} className="btn text-neutral-900 font-normal capitalize p-4 bg-neutral-900 bg-opacity-10 hover:bg-opacity-30 border-0 rounded-full h-14 w-full lg:w-1/2">
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
            <Markdown>{props.children}</Markdown>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiChatHistoryItem;
