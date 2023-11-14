import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import HomeContent from "@/components/HomeContent";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ChatV2 from "./Chat/ChatV2";
import HomePageTitle from "./HomePageTitle";
import ChatV3 from "./Chat/ChatV3";
import HistoryPanel from "./Chat/HistoryPanel/HistoryPanel";

export default function HomePage() {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <HomeContent>
      <HistoryPanel user={user}></HistoryPanel>
      <ChatV3 user={user} />
    </HomeContent>
  );
}

export const getServerSideProps = withPageAuthRequired();
