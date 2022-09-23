import { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import links from "@/json/links.json";
import displayIcons from "@/lib/displayIcons";
import Logo from "@/components/Logo";

interface Props {
  title: string;
}

export default function AdminLayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} | Admin | Jinterros</title>
      </Head>
      <div className="w-full">
        <aside className="sidebar h-screen flex flex-col w-1/5 border-r">
          <div className="logo-view  flex flex-col">
            <div className="w-2/3 flex mx-auto my-10">
              <Logo />
            </div>
            <hr />
          </div>
          <ul className="link-group">
            {links.admin.map((item) => (
              <li
                key={item.link}
                className="my-4 pl-8 flex items-center hover:bg-gray-300 p-2 text-brown-old-hover"
              >
                {displayIcons(item.text)}
                <Link href={item.link}>
                  <a className="ml-4 font-light text-xl">{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="main w-4/5">{children}</main>
      </div>
    </>
  );
}
