"use client";

import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const NavItem = (props: {
  children: any;
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
      translateY: "-24%",
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
      opacity: 0,
      translateY: "+24%",
    },
    hover: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
  };

  const underlineVariants = {
    initial: {
      borderTopColor: "#f5f5f5",
      display: "flex",
      opacity: 0,
      translate: "100%",
      scale: 0,
    },
    hover: {
      borderTopColor: "#a3a3a3",
      display: "flex",
      opacity: 1,
      translate: "0%",
      scale: 1,
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
        className={`relative flex flex-row space-x-2 items-center text-neutral-100 hover:text-neutral-400 backdrop-blur-md transition-all duration-200 ease-in-out`}
      >
        <Link
          className="flex flex-row space-x-2 items-center w-max h-full overflow-hidden text-sm"
          href={props.href}
          target={props.external ? "_blank" : "_self"}
        >
          <motion.div layout className="flex flex-col">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                variants={underlineVariants}
                className="border-t"
              ></motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="flex">
                {props.external ? <PiArrowUpRight /> : <></>}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default NavItem;
