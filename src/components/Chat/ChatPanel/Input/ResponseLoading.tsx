import LoadingSmall from "@/components/Loading/LoadingSmall";
import { PiArrowRightFill, PiArrowRight } from "react-icons/pi";

const ResponseLoading = () => {
  return (
    <div className="group w-fit h-fit p-[0.1rem] rounded-md bg-gradient-to-tr from-neutral-700 to-neutral-50 via-neutral-400 from-60% flex flex-row items-center">
      <button
        disabled
        type="button"
        className="px-4 py-1 flex flex-row lg:space-x-2 items-center w-full h-full lowercase rounded-md bg-gradient-to-b from-black to-neutral-700 hover:to-neutral-600 transition-all duration-200 ease-in-out text-violet-500 cursor-not-allowed"
      >
        <LoadingSmall />
        <p className="text-neutral-100">response in progress...</p>
      </button>
    </div>
  );
};

export default ResponseLoading;
