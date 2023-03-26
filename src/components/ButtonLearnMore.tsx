import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ButtonLearnMore = () => {
  return (
    <Link
      href="/about"
      className="flex flex-row space-x-2 items-center mt-10 pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900 transition-colors"
    >
      <span className="text-neutral-200">
        <AiOutlineInfoCircle />
      </span>
      <p>learn more</p>
    </Link>
  );
};

export default ButtonLearnMore