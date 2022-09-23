import { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import links from "@/json/links.json";
import displayIcons from "@/components/admin/Icons";
import Logo from "@/components/Logo";

export default function AdminLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="w-full">
      <aside className="sidebar h-screen w-1/4 pl-6 border-r">
        <div className="logo-view h-40">
          <Logo />
          <hr />
        </div>
        {links.admin.map((item) => (
          <li key={item.link} className="my-4">
            {displayIcons(item.text)}
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </aside>
      <main className="main w-3/4">{children}</main>
    </div>
  );
}
