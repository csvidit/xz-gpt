const MainContainer = (props: { children: any }) => {
  return (
    <div className="w-screen h-full flex flex-col bg-transparent justify-center p-5 lg:p-10 mt-10 text-neutral-900 dark:text-neutral-200">
      {props.children}
    </div>
  );
};

export default MainContainer;
