import Link from "next/link";
import { UrlObject } from "url";

const SmallButton = (props: {href: string | UrlObject, children: any}) => {
  return (
    <Link
      href={props.href}
      className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-opacity-100"
    >
        {props.children}
    </Link>
  );
};

export default SmallButton;