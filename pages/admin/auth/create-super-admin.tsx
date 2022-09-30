/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import AdminForm from "@/components/form/AdminForm";

export default function CreateaSuperAdmin() {
  return (
    <>
      <Head>
        <title>Admin | Login or Signup </title>
      </Head>
      <div className="w-full flex items-start h-screen">
        <div className="image-view hidden lg:flex w-3/4 h-screen">
          <img
            src="/3-bottles.webp"
            className="h-full w-full"
            alt="Our Story"
          />
        </div>
        <div className="w-full lg:w-1/4 h-screen px-4 py-10 flex justify-center items-center admin-auth-form">
          <div className="content bg-white w-full">
            <AdminForm type="signup" />
          </div>
        </div>
      </div>
    </>
  );
}
