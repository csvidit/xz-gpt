const MainContent = (props: { children: any }) => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col space-y-5 bg-transparent justify-center items-center text-neutral-100">
      {props.children}
    </div>
  );
};

export default MainContent;
