import Markdown from "markdown-to-jsx";

const ChatTextContent = (props: { children: any }) => {
  return (
    <div className="flex font-sans p-2 lg:p-4">
      <Markdown>{props.children}</Markdown>
    </div>
  );
};

export default ChatTextContent;
