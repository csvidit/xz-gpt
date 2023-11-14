const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div
      className={`w-screen min-h-screen h-full flex flex-col space-y-5 justify-center scroll-smooth p-5 py-2.5 lg:px-10 lg:py-5`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
