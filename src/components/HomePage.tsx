import Head from "next/head";
import { Inter } from "next/font/google";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Chat from "@/components/Chat";
import Loading from "@/components/Loading";
import HomeContent from "@/components/HomeContent";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
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
      <MainContainer>
        <Header isAuthenticated={true} />
        <HomeContent>
          <h1 className="text-2xl lg:text-4xl mt-10 lg:mt-0">
            XZAYVIAN <span className="font-light">GPT</span>
          </h1>
          <p className="text-lg lg:text-xl capitalize">
            Welcome, {user?.nickname}
          </p>
          <Chat user={user} />
          <Link
            href="/about"
            className="flex flex-row space-x-2 items-center mt-10 pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900"
          >
            <span className="text-neutral-200">
              <AiOutlineInfoCircle />
            </span>
            <p>learn more</p>
          </Link>
        </HomeContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
