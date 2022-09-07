import { useState, useEffect, PropsWithChildren } from "react";
import Router from "next/router";

import BeerLoader from "@/components/loader/BeerLoader";

export default function LoaderLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading && <BeerLoader />}
      {children}
    </>
  );
}
