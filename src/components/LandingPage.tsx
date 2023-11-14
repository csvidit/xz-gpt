import Head from "next/head";
import Header from "@/components/Header/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
import MainContent from "./MainContent";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PrimaryLink from "./Links/PrimaryLink";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MainContent>
        <h1 className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 font-semibold text-4xl lg:text-6xl">
          <span className="extended">XZAYVIAN GPT</span>
        </h1>
        <h2 className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-xl lg:text-2xl extended">
          VERSION 2 / MULTIMODAL
        </h2>
        <p className="flex flex-row space-x-2 items-center text-base mt-10 justify-center">
         A refreshed UI, better performance, multimodal capabilities, and more. Xzayvian 2 is here.
        </p>
        <div className="mt-10">
          <PrimaryLink type="nonfocus" href="/api/auth/login">
            Log In / Sign Up
          </PrimaryLink>
        </div>
      </MainContent>
    </>
  );
}
