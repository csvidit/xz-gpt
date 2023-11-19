const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div
      className={`relative w-screen min-h-screen h-full max-h-screen flex flex-col space-y-5 scroll-smooth p-4 py-2 lg:px-8 lg:py-4`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
