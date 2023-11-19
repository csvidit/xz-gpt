"use client";

import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const PrimaryButton = (props: {
  children: any;
  type: string; // focus or nonfocus
  onClick: any;
  external?: boolean;
  className?: string;
}) => {
  const mainDivVariants = {
    hover: {},
    initial: {},
  };
  const textVariants1 = {
    initial: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
    hover: {
      display: "none",
      opacity: 0,
      translateY: "-60%",
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
      opacity: 0,
      translateY: "+60%",
    },
    hover: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
  };
  return (
    <MotionConfig
      transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
    >
      <motion.div
        variants={mainDivVariants}
        whileHover="hover"
        initial="initial"
        className={`flex flex-row space-x-2 items-center text-neutral-100 border-2 border-neutral-100 bg-neutral-100 bg-opacity-10 hover:bg-opacity-100 hover:text-black backdrop-blur-md hover:transform hover:scale-105 transition ease-in-out ${props.className}}`}
      >
        <motion.button
          className="flex flex-row space-x-2 items-center w-max h-full p-2 lg:p-4 overflow-hidden"
          onClick={props.onClick}
        >
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                {props.external ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {props.external ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </motion.div>
    </MotionConfig>
  );
};

export default PrimaryButton;
