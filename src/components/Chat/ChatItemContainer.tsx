const ChatItemContainer = (props: {
  variant: string;
  children: React.ReactNode;
}) => {
  return props.variant == "user" ? (
    <div className="my-2 lg:my-4 rounded-md flex flex-row transition-all duration-200 ease-in-out hover:bg-blue-950 hover:bg-opacity-40 hover:cursor-pointer">
      {props.children}
    </div>
  ) : (
    <div className="my-2 lg:my-4 rounded-md flex flex-row font-medium transition-all duration-200 ease-in-out hover:bg-violet-950 hover:bg-opacity-40 hover:cursor-pointer">
      {props.children}
    </div>
  );
};

export default ChatItemContainer;
