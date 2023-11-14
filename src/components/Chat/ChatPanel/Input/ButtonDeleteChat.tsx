import { PiTrashDuotone } from "react-icons/pi";

const ButtonDeleteChat = (props: { chatId: string }) => {
  return (
    <button
      type="button"
      onClick={() => {}}
      className="flex flex-row lg:space-x-2 justify-center items-center px-4 py-1 w-fit lowercase rounded-md bg-transparent bg-opacity-50 border bg-red-950 border-red-800 text-red-500  hover:border-red-500 transition-colors duration-200 ease-in-out"
    >
      <p className="hidden lg:flex">delete chat</p>

      <PiTrashDuotone />
    </button>
  );
};

export default ButtonDeleteChat