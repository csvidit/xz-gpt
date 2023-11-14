"use client";

import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { UrlObject } from "url";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const PrimaryLink = (props: {
  children: any;
  type: string; // focus or nonfocus
  href: string;
  external?: boolean;
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
      translateY: "-100%",
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
      opacity: 0,
      translateY: "+100%",
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
        className={`rounded-md flex flex-row space-x-2 items-center text-neutral-100 border-2 border-neutral-100 bg-neutral-100 bg-opacity-10 hover:bg-opacity-100 hover:text-black backdrop-blur-md hover:transform hover:scale-105 transition ease-in-out`}
      >
        <Link
          className="flex flex-row space-x-2 items-center w-max h-full p-2 lg:p-4 overflow-hidden"
          href={props.href}
          rel="noreferrer noopener"
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
                {props.external ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
              {props.external ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default PrimaryLink;
