import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiLogin, HiLogout } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import SmallButton from "./SmallButton";

const Header = (props: { isAuthenticated: boolean }) => {
  if (props.isAuthenticated) {
    return (
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-900 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link
            href="/"
            className="flex flex-row space-x-1 text-neutral-900 hover:text-neutral-500"
          >
            <p className="">XZAYVIAN</p>
            <p className="font-light">GPT</p>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SmallButton href="/history">
            <span className="text-neutral-200">
              <HiQueueList />
            </span>
            <p>history</p>
          </SmallButton>
          <SmallButton href="/api/auth/logout">
            <span className="text-neutral-200">
              <HiLogout />
            </span>
            <p>sign out</p>
          </SmallButton>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-900 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link
            href="/"
            className="flex flex-row space-x-1 text-neutral-900"
          >
            <p className="">XZAYVIAN</p>
            <p className="font-light">GPT</p>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SmallButton href="/api/auth/login">
            <span className="text-neutral-200">
              <HiLogin />
            </span>
            <p>sign in</p>
          </SmallButton>
        </div>
      </motion.div>
    );
  }
};

export default Header;
