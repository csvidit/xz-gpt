const HomeContent = (props: { children: any }) => {
    return (
      <div className="relative w-full h-full flex flex-col lg:flex-row lg:justify-between bg-transparent lg:space-x-5 text-neutral-900 transition-colors">
        {props.children}
      </div>
    );
  };
  
  export default HomeContent;
  