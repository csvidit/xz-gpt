"use client";

import Head from "next/head";
import Header from "@/components/Header/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import HistoryContainer from "@/components/History/HistoryContainer";
import HistoryContent from "@/components/History/HistoryContent";
import MultiChatHistoryItem from "@/components/History/MultiChatHistoryItem";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user != undefined && history.length == 0) {
      const docRef = doc(db, "users", user!.sub!.toString());
      console.log("Trying to get Firestore data");
      const fetchQuerySnapshot = async () => {
        const querySnapshot = await getDoc(docRef);
        if (querySnapshot.exists()) {
          setHistory(querySnapshot.data()?.history_multi_chat);
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
            Multi-Chat History
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
        <h1 className="text-2xl lg:text-4xl flex flex-row text-center items-center mt-10 lg:mt-0 text-neutral-900">
          Multi-Chat History
        </h1>
        <HistoryContainer>
          {history.length > 0
            ? history?.map((x, index) => {
                let arr = JSON.parse(x);
                console.log(arr);
                if (arr.length > 1) {
                  return (
                    <MultiChatHistoryItem
                      username={user?.nickname}
                      key={index}
                      id={index}
                      label={arr[1].content}
                    >
                      {arr}
                    </MultiChatHistoryItem>
                  );
                } else {
                  return "";
                }
              })
            : "No History"}
        </HistoryContainer>
      </HistoryContent>
    </>
  );
}
