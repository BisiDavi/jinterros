import type { NextPage } from "next";

import HomepageBanner from "@/components/banner/HomepageBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import CocktailView from "@/views/CocktailView";
import LearnmoreView from "@/views/LearnmoreView";
import InstagramFollow from "@/views/InstagramFollow";
import BeerLoader from "@/components/loader/BeerLoader";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <CocktailView />
      <LearnmoreView />
      <InstagramFollow />
    </DefaultLayout>
  );
};

export default Home;
