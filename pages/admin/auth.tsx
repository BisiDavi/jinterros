/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import AdminForm from "@/components/form/AdminForm";

export default function AdminAuth() {
  return (
    <>
      <Head>
        <title>Admin | Login or Signup </title>
      </Head>
      <div className="w-full flex items-start h-screen">
        <div className="image-view w-3/4 h-screen">
          <img
            src="/3-bottles.webp"
            className="h-full w-full"
            alt="Our Story"
          />
        </div>
        <div className="w-1/4 h-screen bg-white px-4 py-10">
          <AdminForm type="login" />
        </div>
      </div>
    </>
  );
}
