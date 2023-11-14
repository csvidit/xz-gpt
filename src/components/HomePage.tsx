"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/components/Loading/Loading";
import HomeContent from "@/components/HomeContent";
import ChatV3 from "./Chat/ChatPanel/ChatV3";
import HistoryPanel from "./Chat/HistoryPanel/HistoryPanel";
import { useState } from "react";

export default function HomePage() {
  const [showHistory, setShowHistory] = useState(false);

  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <HomeContent>
      <HistoryPanel showHistory={showHistory} setShowHistory={setShowHistory} user={user}></HistoryPanel>
      <ChatV3 showHistory={showHistory} user={user} />
    </HomeContent>
  );
}

