import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Buttons/Button";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from 'next/router'
import Loading from "@/components/Loading/Loading";
import HomePage from "@/components/HomePage";
import LandingPage from "@/components/LandingPage";
import UnderConstructionLandingPage from "@/components/UnderConstructionLandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // return <UnderConstructionLandingPage/>

  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if(isLoading)
  {
    return(<Loading/>);
  }
  if(user)
  {
    return <HomePage/>
  }
  else
  {
    return <LandingPage/>
  }
}