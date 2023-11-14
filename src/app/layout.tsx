import "./globals.css";
import { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Xzayvian AI",
  description: `Vidit Khandelwal's link-in-bio page. He is a software engineer based in the United States.`,
  generator: "Next.js",
  keywords: [
    "Vidit Khandelwal",
    "DePauw University",
    "DePauw",
    "CS",
    "computer science",
    "openai",
    "chatgpt",
    "gpt-4",
    "xz",
    "xzayvian",
    "vis",
    "visual",
  ],
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
  creator: "Vidit Khandelwal",
  publisher: "Vidit Khandelwal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <UserProvider>
        <body>
          <MainContainer>
            <Header />
            {children}
          </MainContainer>
        </body>
      </UserProvider>
    </html>
  );
}
