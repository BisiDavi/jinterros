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

  console.log("router", router);

  function getActiveLink(link: string) {
    return router.asPath === link ? "text-brown-old" : "";
  }

  return (
    <>
      <Head>
        <title>{title} | Admin | Jinterros</title>
      </Head>
      <div className="w-full flex">
        <aside className="sidebar h-screen flex flex-col w-1/5 border-r">
          <div className="logo-view h-40 border-b flex flex-col">
            <div className="w-2/5 flex mx-auto my-4">
              <Logo />
            </div>
          </div>
          <ul className="link-group">
            {links.admin.map((item) => {
              const activeLink = getActiveLink(item.link);
              return (
                <li
                  key={item.link}
                  className={`${activeLink} my-4 pl-8 flex items-center hover:bg-gray-300 p-2 text-brown-old-hover`}
                >
                  {displayIcons(item.text)}
                  <Link href={item.link}>
                    <a className="ml-4 font-medium text-xl">{item.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <main className="main w-4/5 flex flex-col">
          <div className="top w-full h-40  border-b px-8 flex">
            <h4 className="text-4xl font-medium text-brown-old flex items-end my-4">
              {title}
            </h4>
          </div>
          <div className="content px-8 py-6">{children}</div>
        </main>
      </div>
    </>
  );
}
