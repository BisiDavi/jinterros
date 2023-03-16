import { Html, Head, Main, NextScript } from "next/document";
import Metatag from "@/components/metatag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;700&family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <Metatag />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
