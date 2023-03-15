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
import { HiLogin } from "react-icons/hi";
import Markdown from "markdown-to-jsx";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {user, isLoading, error} = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(user)
    {
      setIsAuthenticated(true);
    }
    else
    {
      setIsAuthenticated(false);
    }
  }, [user])

  return (
    <>
      <Head>
      <title>About - Xzayvian GPT</title>
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

        <meta property="og:title" content="About - Xzayvian GPT" />
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
        <Header isAuthenticated={isAuthenticated} />
        <HomeContent>
          <h1 className="text-2xl lg:text-4xl mt-10 lg:mt-0">XZAYVIAN</h1>
          <h1 className="text-2xl lg:text-4xl font-light">GPT</h1>
          <div className="mt-10 flex flex-col lg:w-3/4 space-y-2 font-sans">
            <p>
              Based on OpenAI&apos;s ChatGPT 3.5 Turbo LLM. Uses the latest
              version of the model through the official API. New users can sign
              up using their Google account, which will be then be used to
              create their profile on the project&apos;s Auth0 domain.
              (username-password signups are not available at the moment) The
              user can send prompts and get a response to them. The search
              history of the user is connected to their user ID and stored in
              their dedicated Cloud Firestore document. They can see their
              history (and the response they had received) by going to the{" "}
              <code>/history</code> route.{" "}
            </p>
            <h2 className="text-2xl lg:text-4xl">Tech Stack</h2>
            <h3 className="text-xl lg:text-2xl">Frontend</h3>
            <ul>
              <li>Next.js</li>
              <li>TailwindCSS</li>
            </ul>
            <h3 className="text-xl lg:text-2xl">Database</h3>
            <ul>
              <li>Cloud Firestore</li>
            </ul>
            <h3 className="text-xl lg:text-2xl">Authentication</h3>
            <ul>
              <li>Auth0</li>
            </ul>
            <h3 className="text-xl lg:text-2xl">Backend</h3>
            <ul>
              <li>Node.js</li>
            </ul>
            <p>
              While aspects of this project may be replicated with or without
              attribution, the name <strong>Xzayvian GPT</strong> is hereby
              reserved for exclusive use by Vidit Khandelwal as his copyrighted
              intellectual property. Therefore, you may replicate this project
              (and copy various parts of the source code) but you must not call
              the derivative project &quot;Xzayvian.&quot;
            </p>
          </div>
          <Link
            href="/api/auth/login"
            className="flex flex-row space-x-2 items-center text-xl lg:text-2xl mt-10 pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900"
          >
            <span className="text-neutral-200">
              <HiLogin />
            </span>
            <p>jump in</p>
          </Link>
        </HomeContent>
        <Footer />
      </MainContainer>
    </>
  );
}
