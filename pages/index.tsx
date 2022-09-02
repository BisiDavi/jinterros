import HomepageBanner from "@/components/banner/HomepageBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomepageBanner />
    </DefaultLayout>
  );
};

export default Home;
