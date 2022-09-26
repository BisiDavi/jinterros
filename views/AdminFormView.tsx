import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import Button from "@/components/button";
import type { PropsWithChildren } from "react";

export default function AdminFormView({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <section>
      <Button
        text="back"
        icon={<BsArrowLeft size={30} className="mr-2" />}
        className="bg-red-500 font-bold text-white px-4 py-2 rounded-md w-24 hover:opacity-80  items-center justify-center flex my-4"
        onClick={() => router.back()}
      />
      {children}
    </section>
  );
}
