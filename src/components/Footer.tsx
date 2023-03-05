import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsCodeSquare, BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen absolute bottom-0">
      <footer className="flex flex-col space-y-2 self-end p-4 items-end bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex flex-row space-x-2 items-center font-extralight">
          <p className="text-2xl">&copy; 2023 VIDIT KHANDELWAL</p>
        </div>
        <div className="flex flex-row space-x-2 items-center text-neutral-900 dark:text-neutral-100 font-light text-xs uppercase">
          <BsCodeSquare />
          <p>A Closed Source Project</p>
          <BsDot/>
          <p>INVITE ONLY</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
