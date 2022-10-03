import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "@/components/logo";
import links from "@/json/links.json";
import displayIcons from "@/lib/displayIcons";
import Button from "@/components/button";
import useAuthMutation from "@/hooks/useAuthMutation";

export default function AdminSidebar() {
  const router = useRouter();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();

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
              className={`${activeLink} pl-8 flex items-center hover:bg-gray-300 p-1 text-brown-old-hover`}
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
  );
}
