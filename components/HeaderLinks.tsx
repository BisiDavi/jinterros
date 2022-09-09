import Link from "next/link";

import linksContent from "@/json/links.json";

interface Props {
  section: "left" | "right";
}

export default function HeaderLinks({ section }: Props) {
  return (
    <>
      {linksContent.header[section].map((linkItem) => (
        <Link key={linkItem.link} href={linkItem.link}>
          <a className="text-light-brown mx-2 text-xl font-bold  hover:opacity-70">
            {linkItem.text}
          </a>
        </Link>
      ))}
    </>
  );
}
