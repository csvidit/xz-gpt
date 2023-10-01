import { ThreeDots } from "react-loader-spinner";
import MainContainer from "../MainContainer";
import MainContent from "../MainContent";

const Loading = () => {
  return (
    <MainContainer>
      <MainContent>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#000000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p>Loading</p>
      </MainContent>
    </MainContainer>
  );
};

export default Loading;
