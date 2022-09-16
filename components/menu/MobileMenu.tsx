import Link from "next/link";

import links from "@/json/links.json";
import useHeader from "@/hooks/useHeader";

interface LinkItemProps {
  links: {
    link: string;
    text: string;
  }[];
  border?: boolean;
}

function LinkItem({ links, border }: LinkItemProps) {
  const { onCloseHandler, mobileMenu } = useHeader();

  const linkClassName = border
    ? "text-xl border-b h-12 items-end flex pb-1 my-2 text-light-brown"
    : "text-xl my-4 text-light-brown";
  return (
    <>
      {links.map((item) => (
        <li key={item.link} className={linkClassName} onClick={onCloseHandler}>
          <Link href={item.link}>
            <a className="w-full">{item.text}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default function MobileMenu() {
  return (
    <div className="w-full h-screen fixed top-10 py-20 bg-white px-5 z-40">
      <ul>
        <LinkItem border links={links.header.left} />
        <LinkItem border links={links.header.right} />
      </ul>

      <ul className="mt-10">
        <LinkItem links={links.dropdown} />
        <li></li>
      </ul>
    </div>
  );
}
