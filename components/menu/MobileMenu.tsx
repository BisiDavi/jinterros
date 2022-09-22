import Link from "next/link";

import links from "@/json/links.json";
import useHeader from "@/hooks/useHeader";
import useAuth from "@/hooks/useAuth";
import { BiLogOut } from "react-icons/bi";
import useAuthMutation from "@/hooks/useAuthMutation";
import Button from "../button";

interface LinkItemProps {
  links: {
    link: string;
    text: string;
  }[];
  border?: boolean;
}

function LinkItem({ links, border }: LinkItemProps) {
  const { onCloseHandler } = useHeader();

  const linkClassName = border
    ? "text-xl border-b h-12 items-end flex pb-1 my-2 text-light-brown"
    : "text-xl my-4 text-light-brown";
  return (
    <>
      {links.map((item) => (
        <li key={item.link} className={linkClassName} onClick={onCloseHandler}>
          <Link href={item.link}>
            <a className="w-full">{item.text}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default function MobileMenu() {
  const { getAuthStatus } = useAuth();
  const user = getAuthStatus();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();

  console.log("user", user);

  if (user) {
    links.dropdown[2] = { text: "", link: "" };
  }

  return (
    <div className="w-full h-screen fixed top-10 py-20 bg-white px-5 z-40">
      {user && (
        <div className="auth flex items-center justify-between">
          <h4 className="text-xl font-bold">👋 Hello {user?.displayName}</h4>
          <Button
            icon={<BiLogOut className="text-2xl text-white" />}
            className="mr-3 rounded-full border px-4 bg-dark-brown bg-orange-hover"
            title="Logout"
            onClick={() => mutate({})}
          />
        </div>
      )}
      <ul>
        <LinkItem border links={links.header.left} />
        <LinkItem border links={links.header.right} />
      </ul>

      <ul className="mt-10">
        <li></li>
        <LinkItem links={links.dropdown} />
      </ul>
    </div>
  );
}
