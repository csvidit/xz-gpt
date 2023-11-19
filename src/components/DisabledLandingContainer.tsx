const DisabledLandingContainer = (props: { children: React.ReactNode }) => {
    return (
      <div className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 p-4 lg:p-8 backdrop-blur-md lg:w-1/2 h-fit flex flex-col space-y-8 justify-center items-center text-neutral-100">
        {props.children}
      </div>
    );
  };
  
  export default DisabledLandingContainer;
  