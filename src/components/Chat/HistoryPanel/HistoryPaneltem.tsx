"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const HistoryPanelItem = () => {
  const labelVariants = {
    initial: {
      color: "#f5f5f5",
    },
    hover: {
      color: "#fafafa",
    },
  };

  const openVariants = {
    initial: {
      display: "none",
      opacity: 0,
    },
    hover: {
      display: "flex",
      opacity: 1,
    },
  };

  return (
    <MotionConfig transition={{ duration: 0.25, type: "spring", ease: "easeInOut" }}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="px-5 lg:px-10 relative text-sm flex flex-row items-center bg-neutral-900 bg-opacity-10 border-b border-violet-800 hover:border-violet-700 transition-all duration-200"
      >
        <Link href="/" className="w-full h-full">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="z-0 flex flex-row items-center overflow-hidden"
          >
            <motion.div variants={labelVariants} layout className="p-2">
              Animate Gradient in Framer
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                variants={openVariants}
                layout
                className="px-5 lg:px-10 absolute left-0 z-10 flex flex-row space-x-2 items-center text-violet-400 bg-neutral-950 rounded-md w-full h-full p-2 backdrop-blur-md bg-opacity-60"
              >
                <motion.div className="p-2">Open Chat</motion.div>
                <PiArrowRight/>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default HistoryPanelItem;
