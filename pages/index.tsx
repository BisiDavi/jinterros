import type { NextPage } from "next";

import HomepageBanner from "@/components/banner/HomepageBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import CocktailView from "@/views/CocktailView";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <CocktailView />
    </DefaultLayout>
  );
};

export default Home;
