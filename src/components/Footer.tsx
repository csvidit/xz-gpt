import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsCodeSquare, BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-5 py-2.5 rounded-2xl flex flex-col space-y-2 self-end items-end bg-neutral-900 bg-opacity-20 w-full text-neutral-900 overflow-hidden">
      <div className="flex flex-row space-x-2 items-center font-extralight">
        <p className="text-2xl">&copy; 2023 VIDIT KHANDELWAL</p>
      </div>
      <div className="flex flex-row space-x-2 items-center font-light text-xs uppercase">
        <Link href="https://github.com/csvidit/xz-gpt">
          check out this project&apos;s repository
        </Link>
        <HiArrowUpRight />
      </div>
    </footer>
  );
};

export default Footer;
