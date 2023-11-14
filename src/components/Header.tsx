"use client";

import Link from "next/link";
import { HiLogin, HiLogout } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import { useUser } from "@auth0/nextjs-auth0/client";
import SecondaryLink from "./Links/SecondaryLink";
import { Suspense } from "react";
import HeaderLoading from "./HeaderLoading";

export default function Header() {
  
  const { user, error, isLoading } = useUser();

  return isLoading ? (
    <header key={Math.random()} className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md">
      <div className="flex flex-row space-x-2 items-center">
        <Link href="/" className="flex flex-row space-x-1 text-violet-500">
          XZAYVIAN
        </Link>
      </div>
    </header>
  ) : (
    <header key={Math.random()} className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md">
      <div className="flex flex-row space-x-2 items-center">
        <Link href="/" className="flex flex-row space-x-1 text-violet-500">
          XZAYVIAN
        </Link>
      </div>
      {user ? (
        <div key={Math.random()} className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SecondaryLink type="nonfocus" href="/api/auth/login">
            <div className="flex flex-row space-x-1 items-center">
              <HiLogin />
              <p className="lg:flex hidden">sign in</p>
            </div>
          </SecondaryLink>
        </div>
      ) : (
        <div key={Math.random()} className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SecondaryLink type="nonfocus" href="/history">
            <div className="flex flex-row space-x-1 items-center">
              <HiQueueList />
              <p className="lg:flex hidden">history</p>
            </div>
          </SecondaryLink>
          <SecondaryLink type="nonfocus" href="/api/auth/logout">
            <div className="flex flex-row space-x-1 items-center">
              <HiLogout />
              <p className="lg:flex hidden">sign out</p>
            </div>
          </SecondaryLink>
        </div>
      )}
    </header>
  );
}
