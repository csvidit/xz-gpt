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
          <h1 className="flex-grow text-2xl lg:text-4xl flex flex-row items-center mt-10 lg:mt-0">
            Multi-Chat History
          </h1>
          <div className="flex flex-row space-x-2 justify-center items-center pt-1 pb-1 pl-3 pr-3 w-fit mb-5 text-lg lowercase rounded-full border border-neutral-900">
            <AiOutlineInfoCircle />
            <p>
              chat history for the new conversational-style chats is not
              available right now.
            </p>
          </div>
        </HistoryContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
