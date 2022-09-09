import Head from "next/head";
import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
  title?: string;
}

export default function DefaultLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        {title ? (
          <title> Jinterros | Rum with Natural Flavours | {title}</title>
        ) : (
          <title>Welcome to Jinterros | Rum with Natural Flavours</title>
        )}
      </Head>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
}
