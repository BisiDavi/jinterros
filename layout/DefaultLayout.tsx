import Head from "next/head";
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

import Footer from "@/components/footer/Footer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/hooks/useRedux";
import Header from "@/components/header/Header";
import MobileHeader from "@/components/header/MobileHeader";

const DynamicMobleMenu = dynamic(
  () =>
    import(/* webpackChunkName: 'MobileMenu' */ "@/components/menu/MobileMenu")
);

const DynamicSlideCart = dynamic(
  () =>
    import(/* webpackChunkName: 'SlideCart' */ "@/components/cart/SlideCart")
);

interface Props {
  title?: string;
}

export default function DefaultLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { mobileMenu, slideCart } = useAppSelector((state) => state.UI);

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
      {slideCart && <DynamicSlideCart />}
      {mobileMenu && mobileWidth && <DynamicMobleMenu />}
      <main className="mt-20 main">{children}</main>
      <Footer />
    </>
  );
}
