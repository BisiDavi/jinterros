import { AiOutlinePlus } from "react-icons/ai";

import Button from "@/components/button";
import { PropsWithChildren } from "react";

interface Props {
  text: string;
  href: string;
}

export default function AdminTableView({
  text,
  href,
  children,
}: PropsWithChildren<Props>) {
  return (
    <section className="flex flex-col items-end ">
      <Button
        text={text}
        href={href}
        icon={<AiOutlinePlus size={30} className="mr-2" />}
        className="bg-green-500 font-bold text-white px-4 py-2 rounded-md w-48 hover:opacity-80  items-center justify-center flex my-4"
      />
      {children}
    </section>
  );
}
