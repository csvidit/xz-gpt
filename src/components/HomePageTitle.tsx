import { UserProfile } from "@auth0/nextjs-auth0/client";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HomePageTitle = (props: {user: UserProfile | undefined}) => {
  return (
    <div className="flex flex-col items-center justify-center self-center mt-10 lg:mt-0">
      <h1 className="text-2xl lg:text-4xl lg:mt-0">
        XZAYVIAN <span className="font-light">GPT</span>
      </h1>
      <p className="text-lg lg:text-xl capitalize">Welcome, {props.user?.nickname}</p>
    </div>
  );
};

export default HomePageTitle;
