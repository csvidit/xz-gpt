const HistoryContent = (props: { children: any }) => {
    return (
      <div className="w-full min-h-screen h-full flex flex-col bg-transparent items-center text-neutral-900">
        {props.children}
      </div>
    );
  };
  
  export default HistoryContent;
  