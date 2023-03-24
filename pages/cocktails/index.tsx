import { ref, get, child } from "firebase/database";
import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import CocktailItemView from "@/views/CocktailItemView";
import { initializeDB } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import cocktailBanner from "@/public/cocktail_banner.webp";
import type { cocktailItemType } from "@/types";

interface Props {
  cocktails: string;
}

export default function Cocktails({ cocktails }: Props) {
  const parsedCocktail = JSON.parse(cocktails);
  const cocktailArray: cocktailItemType[] | undefined =
    formatDBData(parsedCocktail);

  return (
    <DefaultLayout title="Our Cocktails">
      <div className="view mb-24">
        <div className="banner w-full relative">
          <div className="banner-wrapper">
            <Image
              src={cocktailBanner}
              alt="Our Cocktails"
              placeholder="blur"
              fill
            />
          </div>
          <div className="Cocktails lg:w-52 bg-dark-brown px-4 py-2 lg:h-16 bottom-0 left-0 absolute flex items-center justify-center text-xl text-white font-bold">
            <h4>COCKTAILS</h4>
          </div>
        </div>
        <div className="cocktail-images 2xl:px-10 container px-4 mx-auto">
          <div className="grid cocktail_grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 lg:gap-8 my-10">
            {cocktailArray &&
              cocktailArray.map((item: cocktailItemType) => (
                <CocktailItemView key={item.title} item={item} />
              ))}
          </div>
        </div>
        <style jsx>
          {`
            .banner-wrapper {
              height: calc(100vw / 1.5);
              width: 100%;
            }
          `}
        </style>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, "/cocktail"));
  return {
    props: {
      cocktails: JSON.stringify(dbResponse.val()),
    },
    revalidate: 10,
  };
}
