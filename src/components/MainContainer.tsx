import styles from "./MainContainer.module.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

const MainContainer = (props: { children: any }) => {
  return (
    <div
      className={`w-screen min-h-screen h-full flex flex-col space-y-5 justify-center scroll-smooth p-5 py-2.5 lg:px-10 lg:py-5 selection:bg-blue-300 ${styles.main_container} ${styles.main_background} ${figtree.className}`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
