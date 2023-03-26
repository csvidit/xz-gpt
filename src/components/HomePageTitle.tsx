import { UserProfile } from "@auth0/nextjs-auth0/client";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HomePageTitle = (props: {user: UserProfile | undefined}) => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0">
      <div className="flex flex-row space-x-2 justify-center items-center pt-1 pb-1 pl-3 pr-3 w-fit mb-5 text-xs lowercase rounded-full border border-neutral-900">
        <AiOutlineInfoCircle />
        <p>coming early april: contextual prompts and follow-up questions</p>
      </div>
      <h1 className="text-2xl lg:text-4xl lg:mt-0">
        XZAYVIAN <span className="font-light">GPT</span>
      </h1>
      <p className="text-lg lg:text-xl capitalize">Welcome, {props.user?.nickname}</p>
    </div>
  );
};

export default HomePageTitle;
