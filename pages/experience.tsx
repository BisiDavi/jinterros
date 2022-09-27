import { ref, get, child } from "firebase/database";
import { GetServerSidePropsContext } from "next";

import ExperienceBanner from "@/components/banner/ExperienceBanner";
import ExperienceSlider from "@/components/slider/ExperienceSlider";
import DefaultLayout from "@/layout/DefaultLayout";
import { initializeDB } from "@/lib/firebaseConfig";
import { formatDBDataSlug } from "@/lib/formatDBData";

interface Props {
  experience: string;
}

export default function ExperiencePage({ experience }: Props) {
  const parsedExperience = formatDBDataSlug(experience);

  console.log("parsedExperience", parsedExperience);
  return (
    <DefaultLayout title="Our Experience">
      <ExperienceBanner content={parsedExperience} />
      <ExperienceSlider />
    </DefaultLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, `/pages/experience`));
  return {
    props: {
      experience: JSON.stringify(dbResponse.val()),
    },
  };
}
