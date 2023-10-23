import Head from "next/head";
import Header from "@/components/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
import MainContent from "./MainContent";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function DisabledLandingPage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>Xzayvian GPT</title>
        <meta
          name="description"
          content="The Xzayvian chatbot based on OpenAI GPT-3.5 Turbo, a Vidit Khandelwal Project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, openai, chatgpt, gpt-3.5, gpt, turbo, xz, xzayvian"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Xzayvian GPT" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/dddepth-144.webp" />
        <meta property="og:url" content="https://xz.viditkhandelwal.com" />
        <meta property="og:site_name" content="Xzayvian GPT" />
        <meta
          property="description"
          content="The Xzayvian chatbot based on OpenAI GPT-3.5 Turbo, a Vidit Khandelwal Project"
        />
      </Head>
      <MainContent>
        <h1 className="text-4xl lg:text-6xl flex flex-row items-center mt-10 lg:mt-0">
          XZAYVIAN
        </h1>
        <h1 className="text-4xl lg:text-6xl font-light">GPT</h1>
        <p className="text-xl lg:text-2xl">Based on OpenAI GPT-3.5-Turbo LLM</p>
        <div className="pt-1 pb-1 pl-3 pr-3 text-2xl lg:text-2xl">Due to a security vulnerability, Xzayvian GPT is currently offline.</div>
      </MainContent>
    </>
  );
}
