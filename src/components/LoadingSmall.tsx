import { ThreeDots } from "react-loader-spinner";
import MainContainer from "./MainContainer";
import MainContent from "./MainContent";

const LoadingSmall = () => {
  return (
        <ThreeDots
          height="20"
          width="20"
          radius="9"
          color="#000000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
  );
};

export default LoadingSmall;
