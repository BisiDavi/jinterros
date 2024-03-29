import { useRouter } from "next/router";
import Link from "next/link";

import links from "@/json/links.json";
import displayIcons from "@/lib/displayIcons";
import Button from "@/components/button";
import useAuthMutation from "@/hooks/useAuthMutation";
import AdminNotificationBar from "@/components/header/AdminNotificationBar";
import useHeader from "@/hooks/useHeader";

export default function MobileAdminSidebar() {
  const router = useRouter();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();
  const { onCloseHandler } = useHeader();

  function getActiveLink(link: string) {
    if (link !== "/admin") {
      return router.asPath.includes(link)
        ? "text-brown-old border-brown-left"
        : "";
    } else {
      return router.asPath === link ? "text-brown-old border-brown-left" : "";
    }
  }

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
  return (
    <aside className="w-full h-screen fixed top-10 py-20 bg-white z-40">
      <ul className="link-group">
        {links.admin.map((item) => {
          const activeLink = getActiveLink(item.link);
          return (
            <li
              key={item.link}
              className={`${activeLink} flex items-center hover:bg-gray-300 py-1 px-2 text-brown-old-hover`}
            >
              <Link href={item.link} passHref>
                <span
                  className="pl-6 flex  items-center font-medium text-base w-full h-full"
                  onClick={onCloseHandler}
                >
                  <span className="mr-3">{displayIcons(item.text, 30)}</span>
                  {item.text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <AdminNotificationBar />
      <div className="wrapper absolute w-full bottom-14 flex items-center">
        <Button
          text="Logout"
          className="bg-red-500 px-4 hover:opacity-70 rounded-lg bottom-0 text-white font-bold ml-4 lg:ml-0 lg:mx-auto justify-center py-1"
          onClick={logout}
        />
      </div>
    </aside>
  );
}
