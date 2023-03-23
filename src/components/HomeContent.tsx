const HomeContent = (props: { children: any }) => {
    return (
      <div className="w-screen min-h-screen h-full flex flex-col bg-transparent items-center p-5 lg:p-20 mt-10 text-neutral-900 transition-colors">
        {props.children}
      </div>
    );
  };
  
  export default HomeContent;
  