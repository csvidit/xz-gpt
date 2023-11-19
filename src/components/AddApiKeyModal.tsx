import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import { PiLockDuotone, PiXBold, PiXDuotone } from "react-icons/pi";
import SecondaryButton from "./Buttons/SecondaryButton";

const AddApiKeyModal = (props: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      <MotionConfig
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <LayoutGroup>
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              layout
              className="z-50 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen min-w-screen min-h-screen flex flex-col justify-center items-center bg-neutral-900 bg-opacity-10 m-0 p-0 overflow-hidden text-neutral-100 backdrop-blur-md"
            >
              <motion.div
                layout
                className="relative w-11/12 h-11/12 lg:w-1/2 lg:h-1/2 h-fit p-4 flex flex-col space-y-2 bg-black bg-opacity-40 rounded-md border border-opacity-30 border-neutral-500"
              >
                <SecondaryButton
                  onClick={() => {
                    props.setModalOpen(false);
                  }}
                  external={false}
                  type="nonfocus"
                  className="self-end"
                >
                  <div className="flex flex-row space-x-1 items-center">
                    <PiXBold />
                    <p>Close</p>
                  </div>
                </SecondaryButton>
                <p className="text-lg lg:text-xl font-medium">Add API Key</p>
                <p className="text-sm">
                  To prevent misuse of our product, we invite you to include
                  your API key to ensure unlimited access to GPT3.5 Turbo, GPT4,
                  and GPT4V.
                </p>
                <p className="text-sm">
                  Unlimited history recording, GPT3.5 Turbo, and all data export
                  options are available without requiring an OpenAI API Key. You
                  also have access to 10 free GPT4 and GPT4V prompts per month.
                </p>

                <label
                  htmlFor="UserEmail"
                  className="w-1/2 relative block overflow-hidden border-b border-neutral-400 bg-transparent pt-3 focus-within:border-violet-500"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="API Key"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-neutral-100 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-500 transiton-all transform duration-200 ease-in-out">
                    API Key
                  </span>
                </label>
                <div className="text-violet-500 text-sm flex flex-row space-x-1 items-center flex-wrap">
                  <PiLockDuotone />
                  <p>Your key is encrypted and stored securely.</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </MotionConfig>
    </AnimatePresence>
  );
};

export default AddApiKeyModal;
