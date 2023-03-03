import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiLogout } from "react-icons/hi";
import { HiPencil, HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const Header = (props: { isAuthenticated: boolean }) => {
  if (props.isAuthenticated) {
    return (
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/">
            <h1 className="text-neutral-900 dark:text-neutral-100 hover:text-purple-500 font-medium">
              XZAYVIAN
            </h1>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <Link
            href="/api/auth/logout"
            className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 lowercase rounded-full bg-purple-900 bg-opacity-50 text-purple-200 hover:bg-slate-900"
          >
            <span className="text-purple-500">
              <HiLogout/>
            </span>
            <p>sign out</p>
          </Link>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/">
            <h1 className="text-neutral-900 dark:text-neutral-100 hover:text-purple-500 font-medium">
              XZAYVIAN
            </h1>
          </Link>
        </div>
      </motion.div>
    );
  }
};

export default Header;
