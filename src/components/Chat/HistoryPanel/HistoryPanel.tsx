import { UserProfile } from "@auth0/nextjs-auth0/client";
import HistoryPanelItem from "./HistoryPaneltem";

const HistoryPanel = (props: { user: UserProfile | undefined }) => {
  return (
    <div className=" flex flex-col space-y-2 lg:space-y-4 w-3/12 fixed left-0 overflow-scroll max-h-full text-neutral-100 bg-violet-600 border-t border-t-violet-700 bg-opacity-10 backdrop-blur-md">
      <div className="px-5 lg:px-10 p-2 text-lg lg:text-xl z-20 sticky top-0 bg-gradient-to-b from-violet-900 to-neutral-950 bg-opacity-10 via-violet-950">
        Welcome, {props.user?.name}
      </div>
      <div className="overflow-scroll max-h-full flex flex-col">
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
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
        <HistoryPanelItem />
      </div>
    </div>
  );
};

export default HistoryPanel;
