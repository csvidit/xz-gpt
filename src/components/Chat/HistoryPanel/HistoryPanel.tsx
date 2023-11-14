import { UserProfile } from "@auth0/nextjs-auth0/client";
import HistoryPanelItem from "./HistoryPaneltem";
import NavItem from "@/components/Header/NavItem";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

const HistoryPanel = (props: { user: UserProfile | undefined }) => {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-4 w-3/12 fixed left-0 overflow-scroll max-h-full text-neutral-100 bg-neutral-900 bg-opacity-40 rounded-tr-md border-t border-r border-neutral-800 backdrop-blur-md">
      <div className="px-5 lg:px-10 p-2 z-20 sticky top-0 flex flex-col space-y-4">
        <p className="text-lg lg:text-xl">Welcome, {props.user?.name}</p>
        <p>Chats and history are now saved automatically!</p>
        <p>You have 10 out of 10 daily chats remaining.</p>
        <SecondaryButton type="nonfocus" onClick={() => {}}>
          Show History
        </SecondaryButton>
      </div>
      <div className="overflow-scroll max-h-min flex flex-col">
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
        <HistoryPanelItem/>
      </div>
    </div>
  );
};

export default HistoryPanel;

// bg-gradient-to-b from-violet-900 to-neutral-950 bg-opacity-10 via-violet-950