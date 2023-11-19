import { ThreeDots } from "react-loader-spinner";
import MainContainer from "../MainContainer";
import MainContent from "../MainContent";
import { PuffLoader } from "react-spinners";

const LoadingSmall = () => {

  return <PuffLoader color="#8b5cf6" size={24} />;

  return (
        <ThreeDots
          height="20"
          width="20"
          radius="9"
          color="#10b981"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
  );
};

export default LoadingSmall;
