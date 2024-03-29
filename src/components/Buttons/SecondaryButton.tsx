"use client";

import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { UrlObject } from "url";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const SecondaryButton = (props: {
  children: any;
  external?: boolean;
  type: string; // focus or nonfocus
  onClick: any
  className?: string;
}) => {
  let icon;

  if (props.type === "intra") {
    icon = <PiArrowRight />;
  } else if (props.type === "inter") {
    icon = <PiArrowUpRight />;
  } else {
    icon = <PiArrowRight />;
  }

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
        className={`rounded w-fit flex flex-row space-x-2 items-center text-neutral-100 border border-neutral-100 bg-neutral-100 bg-opacity-10 hover:bg-opacity-100 hover:text-neutral-900 backdrop-blur-md transition ease-in-out ${props.className} }`}
      >
        <motion.button
          className="flex flex-row space-x-2 items-center w-max h-full px-2 py-1 overflow-hidden text-sm"
          onClick={props.onClick}
        >
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div variants={textVariants1} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div variants={textVariants2} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          {/* <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                {icon}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {icon}
              </motion.div>
            </AnimatePresence>
          </motion.div> */}
        </motion.button>
      </motion.div>
    </MotionConfig>
  );
};

export default SecondaryButton;
