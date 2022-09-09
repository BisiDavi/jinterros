import type { GetServerSidePropsContext } from "next";
import type { NextPage } from "next";

import HomepageBanner from "@/components/banner/HomepageBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import CocktailView from "@/views/CocktailView";
import LearnmoreView from "@/views/LearnmoreView";
import InstagramFollow from "@/views/InstagramFollow";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.cookies?.birthYear) {
    return {
      redirect: {
        destination: "/legal-form",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
