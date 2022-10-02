import { ref, get, child } from "firebase/database";
import Image from "next/image";
import ContentEditable from "react-contenteditable";

import { initializeDB } from "@/lib/firebaseConfig";
import DefaultLayout from "@/layout/DefaultLayout";
import Button from "@/components/button";
import { formatDBDataSlug } from "@/lib/formatDBData";

interface Props {
  story: string;
}

export default function OurStory({ story }: Props) {
  const parsedStory = formatDBDataSlug(story);

  return (
    <DefaultLayout title="Our Story">
      <section className="content mb-24">
        <Image
          src={parsedStory.banner}
          alt="Our Story"
          height={1000}
          width={1500}
          layout="responsive"
          className="mt-20"
          placeholder="blur"
          blurDataURL={parsedStory.banner}
        />
        <ContentEditable
          disabled
          html={parsedStory.content}
          onChange={() => null}
          className="text-content w-5/6 lg:w-2/3 mx-auto lg:my-24"
        />
        <div className="image-wrapper w-5/6 lg:w-2/5 mx-auto my-20 lg:mt-20 lg:mb-10">
          <Image
            src="/rum-bottles-2.webp"
            alt="Rum bottles"
            height={1000}
            width={1000}
            layout="responsive"
          />
        </div>
        <Button
          text="SHOP NOW"
          className="bg-dark-brown hover:opacity-80 mx-auto py-3 px-16 flex my-0 text-white font-bold text-xl w-3/5 lg:w-1/5 justify-center"
          href="/shop"
        />
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, `/pages/our-story`));
  return {
    props: {
      story: JSON.stringify(dbResponse.val()),
    },
    revalidate: 10,
  };
}
