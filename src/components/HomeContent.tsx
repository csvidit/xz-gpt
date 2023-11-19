const HomeContent = (props: { children: any }) => {
    return (
      <div className="w-full h-max max-h-screen flex flex-row space-x-4 bg-transparent text-neutral-900 transition-colors">
        {props.children}
      </div>
    );
  };
  
  export default HomeContent;
  