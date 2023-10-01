const ChatItemContainer = (props: {children: any}) => {
  return (
    <div className="my-2 lg:my-4 bg-slate-900 bg-opacity-10 rounded-xl flex flex-row">{props.children}</div>
  );
};

export default ChatItemContainer;
