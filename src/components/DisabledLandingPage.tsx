"use client";

import { motion } from "framer-motion";
import MainContent from "./MainContent";
import PrimaryLink from "./Links/PrimaryLink";

const LandingPage = () => {
  return (
    <MainContent>
      <motion.h1
        animate={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 0 }}
        transition={{ type: "spring" }}
        className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 font-semibold text-4xl lg:text-6xl"
      >
        <p className="extended">XZAYVIAN</p>
      </motion.h1>
      <motion.h2
        animate={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 0 }}
        transition={{ type: "spring" }}
        className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-xl lg:text-2xl extended"
      >
        VERSION 2 / MULTIMODAL
      </motion.h2>
      <motion.p
        animate={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 0 }}
        transition={{
          type: "spring",
        }}
        className="flex flex-row space-x-2 items-center text-base mt-10 justify-center"
      >
        Xzayvian is currently undergoing UI, performance, feature, and security
        upgrades. Please check back later.
      </motion.p>
      <motion.div
        className="mt-10"
        animate={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 0 }}
        transition={{
          type: "spring",
        }}
      >
        <PrimaryLink type="nonfocus" href="/api/auth/login">
          Log In / Sign Up
        </PrimaryLink>
      </motion.div>

      {/* <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-20 text-xs text-center "
        >
          *bring your own key
        </motion.p> */}
    </MainContent>
  );
};

export default LandingPage;
