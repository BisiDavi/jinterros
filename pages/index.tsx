import { ref, get, child } from "firebase/database";
import type { GetServerSidePropsContext } from "next";
import type { NextPage } from "next";

import HomepageBanner from "@/components/banner/HomepageBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import { initializeDB } from "@/lib/firebaseConfig";
import CocktailView from "@/views/CocktailView";
import LearnmoreView from "@/views/LearnmoreView";
import InstagramFollow from "@/views/InstagramFollow";

interface Props {
  cocktails: string;
}

const Home: NextPage<Props> = ({ cocktails }) => {
  return (
    <DefaultLayout>
      <HomepageBanner />
      <CocktailView cocktails={cocktails} />
      <LearnmoreView />
      <InstagramFollow />
    </DefaultLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, "/cocktail"));

  if (!req.cookies?.birthYear) {
    return {
      redirect: {
        destination: "/legal-form",
        permanent: false,
      },
    };
  }

  return {
    props: {
      cocktails: JSON.stringify(dbResponse.val()),
    },
  };
}

export default Home;
