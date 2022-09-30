import dynamic from "next/dynamic";
import Head from "next/head";
import type { PropsWithChildren } from "react";

import AdminNotificationBar from "@/components/header/AdminNotificationBar";
import useMediaQuery from "@/hooks/useMediaQuery";
import AdminSidebar from "@/components/sidebar/AdminSidebar";

interface Props {
  title: string;
}

export default function AdminLayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  const mobileWidth = useMediaQuery("(max-width:768px)");

  const DynamicMobileHeader = dynamic(
    () =>
      import(
        /* webpackChunkName: 'MobileHeader' */ "@/components/header/MobileHeader"
      )
  );

  return (
    <>
      <Head>
        <title>{title} | Admin | Jinterros</title>
      </Head>
      <div className="w-full flex">
        <AdminSidebar />
        {mobileWidth && <DynamicMobileHeader />}
        <main className="main w-full lg:w-4/5 mt-20 lg:mt-0 flex flex-col">
          <div className="top w-full h-40  hidden lg:flex border-b px-8 flex relative">
            <AdminNotificationBar />
            <h4 className="text-4xl font-medium text-brown-old flex items-end my-4">
              {title}
            </h4>
          </div>
          <div className="content px-6 lg:px-8 py-6">{children}</div>
        </main>
      </div>
    </>
  );
}
