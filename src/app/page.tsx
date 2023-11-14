"use client";

import DisabledLandingPage from "@/components/DisabledLandingPage";
import HomePage from "@/components/HomePage";
import LandingPage from "@/components/LandingPage";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Index = () => {
  const { user, error, isLoading } = useUser();

  if (user) {
    return <HomePage />;
  } else {
    return <LandingPage />;
  }
};

export default Index;
