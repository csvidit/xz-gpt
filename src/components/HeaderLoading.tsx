"use client";

import Link from "next/link";
import { PuffLoader } from "react-spinners";

const HeaderLoading = () => {
  return (
    <header className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md">
      <div className="flex flex-row space-x-2 items-center">
        <Link href="/" className="flex flex-row space-x-1 text-violet-500 extended">
          XZAYVIAN
        </Link>
      </div>
      <div>
        <PuffLoader color="#8b5cf6" size={24} />
      </div>
    </header>
  );
};

export default HeaderLoading;
