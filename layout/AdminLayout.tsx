import { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import links from "@/json/links.json";
import displayIcons from "@/lib/displayIcons";
import Logo from "@/components/Logo";
import AdminNotificationBar from "@/components/header/AdminNotificationBar";
import Button from "@/components/button";
import useAuthMutation from "@/hooks/useAuthMutation";

interface Props {
  title: string;
}

export default function AdminLayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  const router = useRouter();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();

  function logout() {
    mutate(
      {},
      {
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  }

  function getActiveLink(link: string) {
    if (link !== "/admin") {
      return router.asPath.includes(link)
        ? "text-brown-old border-brown-left"
        : "";
    } else {
      return router.asPath === link ? "text-brown-old border-brown-left" : "";
    }
  }

  return (
    <>
      <Head>
        <title>{title} | Admin | Jinterros</title>
      </Head>
      <div className="w-full flex">
        <aside className="sidebar hidden lg:flex h-screen flex flex-col relative w-1/5 border-r">
          <div className="logo-view h-40 border-b flex flex-col">
            <div className="w-2/5 flex mx-auto my-4">
              <Logo link="/admin" />
            </div>
          </div>
          <ul className="link-group">
            {links.admin.map((item) => {
              const activeLink = getActiveLink(item.link);
              return (
                <li
                  key={item.link}
                  className={`${activeLink} pl-8 flex items-center hover:bg-gray-300 p-2 text-brown-old-hover`}
                >
                  {displayIcons(item.text)}
                  <Link href={item.link} passHref>
                    <a className="ml-4 font-medium text-xl w-full h-full">
                      {item.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="wrapper absolute w-full bottom-14 flex items-center">
            <Button
              text="Logout"
              className="bg-red-500 px-4 hover:opacity-70 rounded-lg bottom-0 text-white font-bold mx-auto justify-center py-1"
              onClick={logout}
            />
          </div>
        </aside>
        <main className="main w-full lg:w-4/5 flex flex-col">
          <div className="top w-full h-40  hidden lg:flex border-b px-8 flex relative">
            <AdminNotificationBar />
            <h4 className="text-4xl font-medium text-brown-old flex items-end my-4">
              {title}
            </h4>
          </div>
          <div className="content px-6 lg:px-8 py-6">{children}</div>
        </main>
      </div>
    </>
  );
}
