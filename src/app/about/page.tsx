import Header from "@/components/Header";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
import MainContent from "@/components/MainContent";

export default function Home() {

  return (
    <>
      <Header/>
      <MainContent>
        <h1 className="text-2xl lg:text-4xl mt-10 lg:mt-0">
          XZAYVIAN <span className="font-light">GPT</span>
        </h1>
        <div className="mt-10 flex flex-col lg:w-3/4 space-y-2">
          <p>
            Based on OpenAI&apos;s ChatGPT 3.5 Turbo LLM. Uses the latest
            version of the model through the official API. New users can sign up
            using their Google account, which will be then be used to create
            their profile on the project&apos;s Auth0 domain. (username-password
            signups are not available at the moment) The user can send prompts
            and get a response to them. The search history of the user is
            connected to their user ID and stored in their dedicated Cloud
            Firestore document. They can see their history (and the response
            they had received) by going to the <code>/history</code> route.{" "}
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
      </MainContent>
    </>
  );
}
