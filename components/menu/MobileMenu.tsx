import Link from "next/link";

import links from "@/json/links.json";

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
  return (
    <div className="w-full h-full bg-white px-4 z-50">
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
