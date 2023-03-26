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

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user != undefined && history.length <= 0) {
      const docRef = doc(db, "users", user!.sub!.toString());
      console.log("Trying to get Firestore data");
      const fetchQuerySnapshot = async () => {
        const querySnapshot = await getDoc(docRef);
        setHistory(querySnapshot.data()?.history);
        console.log(console.log(history));
      };
      fetchQuerySnapshot();
    }
  }, [history, user]);

  if (isLoading) {
    return <Loading />;
  }

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
          <div className="flex flex-row space-x-2 justify-center items-center pt-1 pb-1 pl-3 pr-3 w-fit mb-5 text-xs lowercase rounded-full border border-neutral-900">
            <AiOutlineInfoCircle />
            <p>
              chat history for the new conversational-style chats are not available right now. 
            </p>
          </div>
          <HistoryContainer>
            {history.length > 0 &&
              history?.map(
                (
                  x: {
                    response: {
                      id: string | null | undefined;
                      choices: {
                        message: {
                          id: string | null | undefined;
                          content: any;
                        };
                      }[];
                    };
                    request: string;
                  },
                  index
                ) => {
                  return (
                    <HistoryItem
                      key={index}
                      id={x?.response?.id}
                      label={x?.request}
                    >
                      {x?.response?.choices[0]?.message?.content}
                    </HistoryItem>
                  );
                }
              )}
          </HistoryContainer>
        </HistoryContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
