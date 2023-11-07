'use client'

import Link from "next/link";
import { HiLogin, HiLogout } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import SmallButton from "./Buttons/SmallButton";
import { Session, getSession } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user, isLoading, error } = useUser();

  if (user) {
    return (
      <div className="rounded-2xl z-10 flex flex-row space-x-2 justify-between items-center w-full h-max text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md bg-neutral-900 bg-opacity-20">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/" className="flex flex-row space-x-1 text-neutral-900">
            <p className="">XZAYVIAN</p>
            <p className="font-light">GPT</p>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SmallButton href="/history">
            <span className="text-neutral-200">
              <HiQueueList />
            </span>
            <p className="lg:flex hidden">history</p>
          </SmallButton>
          <SmallButton href="/api/auth/logout">
            <span className="text-neutral-200">
              <HiLogout />
            </span>
            <p className="lg:flex hidden">sign out</p>
          </SmallButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded-2xl z-10 flex flex-row space-x-2 justify-between items-center w-full h-max text-xl lg:text-2xl p-5 py-2.5 backdrop-blur-md bg-neutral-900 bg-opacity-20">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/" className="flex flex-row space-x-1 text-neutral-900">
            <p className="">XZAYVIAN</p>
            <p className="font-light">GPT</p>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <SmallButton href="/api/auth/login">
            <span className="text-neutral-200">
              <HiLogin />
            </span>
            <p className="lg:flex hidden">sign in</p>
          </SmallButton>
        </div>
      </div>
    );
  }
}
