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
          <a className="text-dark-brown mx-2 text-xl">{linkItem.text}</a>
        </Link>
      ))}
    </>
  );
}
