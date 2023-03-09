const MainContent = (props: { children: any }) => {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col bg-transparent justify-center items-center p-5 lg:p-10 mt-10 text-neutral-900">
      {props.children}
    </div>
  );
};

export default MainContent;
