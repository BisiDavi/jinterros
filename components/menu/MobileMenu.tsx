import Link from "next/link";

import links from "@/json/links.json";
import useHeader from "@/hooks/useHeader";

interface LinkItemProps {
  links: {
    link: string;
    text: string;
  }[];
}

function LinkItem({ links }: LinkItemProps) {
  return (
    <>
      {links.map((item) => (
        <li key={item.link}>
          <Link href={item.link}>
            <a>{item.text}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default function MobileMenu() {
  const { onCloseHandler, mobileMenu } = useHeader();

  return (
    <div className="w-full h-screen fixed top-10 py-20 bg-white px-4 z-40">
      <ul>
        <LinkItem links={links.header.left} />
        <LinkItem links={links.header.right} />
      </ul>

      <ul className="mt-8">
        <LinkItem links={links.dropdown} />
        <li></li>
      </ul>
    </div>
  );
}
