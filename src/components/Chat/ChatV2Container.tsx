const ChatV2Container = (props: {children: any}) => {
  return <div className="lg:w-4/6 flex flex-col space-y-4 justify-between h-full">{props.children}</div>;
};

export default ChatV2Container;