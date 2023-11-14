import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="rounded-md bg-neutral-900 bg-opacity-40 border-neutral-800 p-5 py-2.5 border flex flex-col space-y-2 self-end items-end bg-neutral-950 w-full h-max">
      <div className="flex flex-row space-x-2 items-center font-extralight">
        <p className="">&copy; 2023 VIDIT KHANDELWAL</p>
      </div>
      <div className="flex flex-row space-x-2 items-center font-light text-xs">
        <Link href="https://github.com/csvidit/xz-gpt">
          check out this project&apos;s repository
        </Link>
        <HiArrowUpRight />
      </div>
    </footer>
  );
};

export default Footer;
