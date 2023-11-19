import Markdown from "markdown-to-jsx";

const ChatTextContent = (props: { children: any }) => {
  return (
    <div className="flex p-2 lg:p-4 max-w-3/5 text-neutral-100">
      <Markdown options={{ forceBlock: true}}>{props.children}</Markdown>
    </div>
  );
};

export default ChatTextContent;
