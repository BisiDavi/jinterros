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
          <title> Jinterros | {title}</title>
        ) : (
          <title>Welcome to Jinterros</title>
        )}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
 