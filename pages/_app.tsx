import { useEffect } from "react";
import Aos from "aos";

import type { AppProps } from "next/app";
import Providerlayout from "@/layout/ProviderLayout";

import "aos/dist/aos.css";
import "@/styles/globals.css";
import LoaderLayout from "@/layout/LoaderLayout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);
  return (
    <Providerlayout>
      <LoaderLayout>
        <Component {...pageProps} />
      </LoaderLayout>
    </Providerlayout>
  );
}

export default MyApp;
