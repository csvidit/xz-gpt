"use client";

import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { UrlObject } from "url";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const SecondaryLink = (props: {
  children: any;
  external?: boolean;
  type: string; // focus or nonfocus
  href: string;
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
        className={`rounded-md flex flex-row space-x-2 items-center text-white border border-white bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black backdrop-blur-md transition ease-in-out`}
      >
        <Link
          className="flex flex-row space-x-2 items-center w-max h-full px-2 py-1 overflow-hidden text-sm"
          href={props.href}
          target={props.external ? "_blank" : "_self"}
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
                {icon}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {icon}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default SecondaryLink;
