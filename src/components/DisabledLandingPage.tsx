import MainContent from "./MainContent";
import PrimaryLink from "./Links/PrimaryLink";

const DisabledLandingPage = () => {
  return (
    <MainContent>
      <h1 className="extended flex flex-col lg:flex-row justify-center items-center lg:space-x-2 font-semibold text-4xl lg:text-6xl">
        XZAYVIAN
      </h1>
      <h2 className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-xl lg:text-2xl extended">
        VERSION 2 / MULTIMODAL
      </h2>
      <p className="flex flex-row space-x-2 items-center text-base mt-10 justify-center">
        Xzayvian is currently undergoing UI, performance, feature, and security
        upgrades. Please check back later.
      </p>
      <div className="mt-10">
        <PrimaryLink type="nonfocus" href="/api/auth/login">
          Log In / Sign Up
        </PrimaryLink>
      </div>
    </MainContent>
  );
};

export default DisabledLandingPage;
