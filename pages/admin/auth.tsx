/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import AdminLoginForm from "@/components/form/AdminAuthForm";

export default function AdminAuth() {
  return (
    <>
      <Head>
        <title>Admin | Login or Signup </title>
      </Head>
      <div className="w-full flex items-start h-screen">
        <div className="image-view w-3/4 h-screen">
          <img
            src="/our-story-banner.webp"
            alt="Our Story"
            className="h-full"
          />
        </div>
        <div className="w-auth w-1/4 bg-white px-4 py-10">
          <AdminLoginForm />
        </div>
      </div>
    </>
  );
}
