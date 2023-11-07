import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
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

export default function HomePage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <HomeContent>
        <HomePageTitle user={user}></HomePageTitle>
        <ChatV2 user={user} />
      </HomeContent>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
