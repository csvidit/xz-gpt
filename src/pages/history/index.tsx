import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { db } from "@/firebase.config";
import { doc, getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import HistoryContainer from "@/components/HistoryContainer";
import HistoryItem from "@/components/HistoryItem";
import HistoryContent from "@/components/HistoryContent";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xzayvian GPT / History</title>
        <meta
          name="description"
          content="Your search history on Xzayvian GPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Header isAuthenticated={true} />
        <HistoryContent>
          <h1 className="text-2xl lg:text-4xl flex flex-row items-center mt-10 lg:mt-0">
            HISTORY
          </h1>
          <div className="flex flex-grow flex-col justify-center items-center lg:flex-row space-y-4 space-x-0 lg:space-x-4 lg:space-y-0 w-full h-full min-w-screen">
            <Link
              href="/history/single-chat"
              className="flex flex-row space-x-2 items-center text-xl lg:text-2xl pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900 transition-colors"
            >
              <p>single-chat history &#40;old chats&#41;</p>
            </Link>
            <Link
              href="/history/multi-chat"
              className="flex flex-row space-x-2 items-center text-xl lg:text-2xl pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900 transition-colors"
            >
              <p>multi-chat history</p>
            </Link>
          </div>
        </HistoryContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
