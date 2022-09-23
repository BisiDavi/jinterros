import Button from "@/components/button";
import Head from "next/head";
import Image from "next/image";

export default function AdminAuth() {
  return (
    <>
      <Head>
        <title>Admin | Login or Signup </title>
      </Head>
      <div className="w-full flex items-start">
        <div className="image-view w-4/5">
          <Image
            src="/our-story-banner.webp"
            alt="Our Story"
            height={1000}
            width={1500}
            layout="responsive"
            className="mt-20"
          />
        </div>
        <div className="w-auth w-1/5 bg-white px-4 py-10">
          <div className="content h-80 rounded shadow  py-2">
            <h4 className="text-center font-bold my-2">Admin Login</h4>
            <Button
              text="login"
              className="bg-orange w-1/2 mx-auto flex items-center justify-center h-12 mt-10 text-white font-bold text-xl hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
