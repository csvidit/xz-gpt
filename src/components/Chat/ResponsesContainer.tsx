const ResponsesContainer = (props: {children: any}) => {
    return <div className="flex flex-col space-y-4 h-[400px] self-end justify-end items-end">{props.children}</div>;
  };
  
  export default ResponsesContainer;