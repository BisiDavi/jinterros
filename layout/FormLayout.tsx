import Head from "next/head";
import { PropsWithChildren } from "react";

export default function FormLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>
          Welcome to Jinterros, Please enter your age for eligbility
        </title>
      </Head>
      <section className="h-screen form-layout flex items-center justify-center">
        <div className="content w-3/5">{children}</div>
      </section>
      <style jsx>
        {`
          .form-layout {
            background-image: url("/form-bg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
          }
        `}
      </style>
    </>
  );
}
