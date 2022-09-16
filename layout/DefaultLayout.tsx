import Head from "next/head";
import type { PropsWithChildren } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileHeader from "@/components/header/MobileHeader";
import { useAppSelector } from "@/hooks/useRedux";
import MobileMenu from "@/components/menu/MobileMenu";

interface Props {
  title?: string;
}

export default function DefaultLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { mobileMenu } = useAppSelector((state) => state.UI);

  return (
    <>
      <Head>
        {title ? (
          <title> Jinterros | Rum with Natural Flavours | {title}</title>
        ) : (
          <title>Welcome to Jinterros | Rum with Natural Flavours</title>
        )}
      </Head>
      {mobileWidth ? <MobileHeader /> : <Header />}
      {mobileMenu && mobileWidth && <MobileMenu />}
      <main className="mt-20 main">{children}</main>
      <Footer />
    </>
  );
}
