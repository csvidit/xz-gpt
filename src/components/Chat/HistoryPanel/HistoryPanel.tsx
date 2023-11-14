import { UserProfile } from "@auth0/nextjs-auth0/client";
import HistoryPanelItem from "./HistoryPaneltem";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const HistoryPanel = (props: {
  showHistory: boolean;
  setShowHistory: Dispatch<SetStateAction<boolean>>;
  user: UserProfile | undefined;
}) => {
  return (
    <motion.div
      layout
      className={`flex flex-col space-y-2 lg:space-y-4 w-3/12 fixed left-0 overflow-hidden max-h-full text-neutral-100 bg-neutral-900 bg-opacity-40 border-neutral-800 backdrop-blur-md ${
        props.showHistory
          ? "rounded-tr-md border-t border-r"
          : "rounded-r-md border-t border-r border-b"
      }`}
    >
      <LayoutGroup>
        <motion.div
          layout
          className="px-4 lg:px-8 p-2 z-20 sticky top-0 flex flex-col space-y-4 grow"
        >
          <motion.p className="text-lg lg:text-xl">
            Welcome, {props.user?.name}
          </motion.p>
          <motion.p>Chats and history are now saved automatically!</motion.p>
          <motion.p>You have 10 out of 10 daily chats remaining.</motion.p>
          <SecondaryButton
            type="nonfocus"
            onClick={() => {
              props.setShowHistory(!props.showHistory);
            }}
          >
            Show History
          </SecondaryButton>
        </motion.div>
      </LayoutGroup>
      <AnimatePresence mode="wait">
        {props.showHistory && (
          <motion.div
            layout
            className="overflow-scroll max-h-min flex flex-col"
            style={{ scrollbarColor: "transparent transparent" }}
          >
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
            <HistoryPanelItem />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HistoryPanel;

// bg-gradient-to-b from-violet-900 to-neutral-950 bg-opacity-10 via-violet-950
