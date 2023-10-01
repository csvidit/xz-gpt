import { UserProfile } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HomePageTitle = (props: { user: UserProfile | undefined }) => {
  return (
    <div className="flex flex-col space-y-5 lg:w-2/6">
      <div className="text-lg lg:text-xl capitalize w-fit">
        Welcome, {props.user?.nickname}
      </div>
      <div className="flex flex-col space-y-2.5 rounded-2xl p-5 py-2.5 bg-neutral-900 bg-opacity-20 w-full h-fit">
        To make sure your current conversation is recorded, click the reset chat
        button before leaving. If you do not want it to be recorded in your search history, you can click delete.
      </div>
    </div>
  );
};

export default HomePageTitle;
