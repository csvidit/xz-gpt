import Link from "next/link";
import NavItem from "./NavItem";

const DisabledHeader = () => {
  return (
    <header
      key={Math.random()}
      className="rounded-md bg-neutral-900 bg-opacity-40 border border-neutral-800 z-10 flex flex-row space-x-2 justify-between items-center w-full h-full text-xl lg:text-2xl px-4 py-2 backdrop-blur-md"
    >
      <div className="flex flex-row space-x-2 items-center">
        <Link
          href="/"
          className="flex flex-row space-x-1 text-violet-500 extended hover:text-violet-400 transition-colors duration-200 ease-in-out"
        >
          XZAYVIAN
        </Link>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        <NavItem href="/about">About</NavItem>
        <NavItem href="https://viditkhandelwal.com">
          viditkhandelwal.com
        </NavItem>
      </div>
    </header>
  );
};

export default DisabledHeader;
