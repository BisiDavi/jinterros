/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useRouter } from "next/router";

import links from "@/json/links.json";
import dropdown from "@/json/dropdown.json";
import useHeader from "@/hooks/useHeader";
import useAuth from "@/hooks/useAuth";
import useAuthMutation from "@/hooks/useAuthMutation";
import Button from "@/components/button";
import useMyOrders from "@/hooks/useMyOrders";

interface LinkItemProps {
  links: {
    link: string;
    text: string;
  }[];
  border?: boolean;
}

function LinkItem({ links, border }: LinkItemProps) {
  const { onCloseHandler } = useHeader();
  const router = useRouter();

  function getActiveLink(link: string) {
    return router.asPath === link
      ? "font-bold text-brown-old"
      : "text-light-brown";
  }

  const linkClassName = border
    ? "text-xl border-b h-12 items-end flex pb-1 my-2 text-light-brown"
    : "text-xl my-4 text-light-brown";
  return (
    <>
      {links.map((item) => {
        const activeLink = item !== null ? getActiveLink(item.link) : null;
        return (
          <>
            {item !== null && (
              <li
                key={item.link}
                className={linkClassName}
                onClick={onCloseHandler}
              >
                <Link href={item.link}>
                  <span className={`w-full ${activeLink}`}>{item.text}</span>
                </Link>
              </li>
            )}
          </>
        );
      })}
    </>
  );
}

export default function MobileMenu() {
  const { getAuthStatus } = useAuth();
  const user = getAuthStatus();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();
  const { onCloseHandler } = useHeader();
  const {  orderData } = useMyOrders();
  const router = useRouter();

  function authHandler() {
    router.push("/auth").then(() => {
      onCloseHandler();
    });
  }

  return (
    <div className="w-full h-screen fixed top-10 py-20 bg-white px-5 z-40">
      {user?.displayName ? (
        <div className="auth flex items-center justify-between">
          <h4 className="text-xl font-bold">👋 Hello, {user?.displayName}</h4>
          <Button
            icon={<BiLogOut className="text-2xl text-white" />}
            className="mr-3 rounded-full border px-4 bg-dark-brown bg-orange-hover"
            title="Logout"
            onClick={() => mutate({})}
          />
        </div>
      ) : (
        <Button
          text="Login / Signup"
          className="rounded-full text-white mx-auto w-1/2 py-1 text-lg font-bold flex items-center justify-center bg-orange bg-dark-brown-hover"
          icon={<BiLogIn className="mr-2" size={24} />}
          onClick={authHandler}
        />
      )}
      <ul>
        <LinkItem border links={links.header.left} />
        <LinkItem border links={links.header.right} />
      </ul>

      <ul className="mt-10">
        <LinkItem links={dropdown.header} />
        {orderData.length > 0 && (
          <LinkItem
            links={[{ link: "/order-progress", text: "Track Orders" }]}
          />
        )}
      </ul>
    </div>
  );
}
