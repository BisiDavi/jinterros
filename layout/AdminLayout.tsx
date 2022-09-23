import { PropsWithChildren } from "react";
import Link from "next/link";

import links from "@/json/links.json";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full">
      <aside className="sidebar w-1/4 pl-6">
        {links.admin.map((item) => (
          <li key={item.link} className="my-4">
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
