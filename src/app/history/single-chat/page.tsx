"use client";

import Head from "next/head";
import Header from "@/components/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import HistoryContainer from "@/components/History/HistoryContainer";
import HistoryItem from "@/components/History/HistoryItem";
import HistoryContent from "@/components/History/HistoryContent";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user != undefined) {
      const docRef = doc(db, "users", user!.sub!.toString());
      console.log("Trying to get Firestore data");
      const fetchQuerySnapshot = async () => {
        const querySnapshot = await getDoc(docRef);
        if (querySnapshot.exists()) {
          setHistory(querySnapshot.data()?.history);
          console.log(console.log(history));
        } else {
          setHistory([]);
          console.log("No History");
          console.log(history.length);
        }
      };
      fetchQuerySnapshot();
    }
  }, [history, user]);

  if (isLoading) {
    return <Loading />;
  }

  if (history == null || history == undefined) {
    return (
      <>
        <HistoryContent>
          <h1 className="text-2xl lg:text-4xl flex flex-row items-center mt-10 lg:mt-0">
            Single-Chat History
          </h1>
          <HistoryContainer>
            <p>No History</p>
          </HistoryContainer>
        </HistoryContent>
      </>
    );
  }

  return (
    <> 
      <HistoryContent>
        <h1 className="text-2xl lg:text-4xl flex flex-row items-center mt-10 lg:mt-0">
          Single-Chat History
        </h1>
        <HistoryContainer>
          {history.length > 0
            ? history?.map(
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
              )
            : "No History"}
        </HistoryContainer>
      </HistoryContent>
    </>
  );
}
