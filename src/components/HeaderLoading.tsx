"use client"

import Link from "next/link";

const HeaderLoading = () => {
  return (
    <header className="rounded-2xl z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md bg-neutral-900">
      <div className="flex flex-row space-x-2 items-center">
        <Link href="/" className="flex flex-row space-x-1 text-violet-500">
          XZAYVIAN
        </Link>
      </div>
    </header>
  );
};

export default HeaderLoading;
