import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiLogin } from "react-icons/hi";
import { HiPencil, HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const Header = () => {
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
};

export default Header;
