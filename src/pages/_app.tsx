import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MainContainer>
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </UserProvider>
  );
}
