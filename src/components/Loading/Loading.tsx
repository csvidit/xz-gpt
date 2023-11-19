import { ThreeDots } from "react-loader-spinner";
import MainContainer from "../MainContainer";
import MainContent from "../MainContent";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <MainContent>
      <div className="text-lg lg:text-xl flex flex-row space-x-2 items-center font-medium p-4 bg-neutral-900 bg-opacity-40 border border-neutral-800 backdrop-blur-md rounded-md">
        <PuffLoader color="#8b5cf6" size={24} />
        <p className="animate-pulse">Loading...</p>
      </div>
    </MainContent>
  );
};

export default Loading;
