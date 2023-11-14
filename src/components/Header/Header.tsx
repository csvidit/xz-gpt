"use client";

import Link from "next/link";
import { HiLogin, HiLogout } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import { useUser } from "@auth0/nextjs-auth0/client";
import SecondaryLink from "../Links/SecondaryLink";
import { Suspense } from "react";
import HeaderLoading from "../HeaderLoading";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const { user, error, isLoading } = useUser();

  return isLoading ? (
    <HeaderLoading />
  ) : (
    <header
      key={Math.random()}
      className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md"
    >
      <div className="flex flex-row space-x-2 items-center">
        <Link
          href="/"
          className="flex flex-row space-x-1 text-violet-500 extended"
        >
          XZAYVIAN
        </Link>
      </div>
      {user ? (
        <DesktopNav isAuthenticated={true} />
      ) : (
        <DesktopNav isAuthenticated={false} />
      )}
    </header>
  );
}
