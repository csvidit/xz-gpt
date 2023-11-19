import MainContent from "./MainContent";
import DisabledLandingContainer from "./DisabledLandingContainer";

const DisabledLandingPage = () => {
  return (
    <MainContent>
      <DisabledLandingContainer>
        <h1 className="w-fit extended flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-4xl lg:text-6xl">
          XZAYVIAN
        </h1>
        <h2 className="w-fit flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-xl lg:text-2xl extended">
          VERSION 2 / MULTIMODAL
        </h2>
        <p className="flex flex-row space-x-2 items-center text-base mt-10 justify-center text-center">
          Xzayvian is currently undergoing UI, performance, feature, and
          security upgrades. These include updates to the security of the
          website, upgrading AI capabilities using the newly announced APIs, and
          a refreshed UI.
        </p>
        <p>Please check back later.</p>
        <div className="">
          Xzayvian &copy; 2023 Vidit Khandelwal. All rights reserved.
        </div>
      </DisabledLandingContainer>
    </MainContent>
  );
};

export default DisabledLandingPage;
