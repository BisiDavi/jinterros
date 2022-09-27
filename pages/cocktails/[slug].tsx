/* eslint-disable @next/next/no-img-element */
import { ref, get, child } from "firebase/database";
import Image from "next/image";
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/DefaultLayout";
import CocktailItemView from "@/views/CocktailItemView";
import { initializeDB } from "@/lib/firebaseConfig";
import toSlug from "@/lib/toSlug";
import CocktailList from "@/components/cocktail/CocktailList";
import { formatDBData } from "@/lib/formatDBData";
import type { cocktailItemType } from "@/types";

interface Props {
  cocktails: string;
}

export default function CocktailPage({ cocktails }: Props) {
  const parsedCocktail = JSON.parse(cocktails);
  const router = useRouter();
  const { slug } = router.query;

  const cocktailArray: cocktailItemType[] | undefined =
    formatDBData(parsedCocktail);

  const cocktail: cocktailItemType | undefined = cocktailArray?.filter(
    (item) => toSlug(item.title) === slug
  )[0];

  const otherCocktails = cocktailArray?.filter((item) => {
    const id = toSlug(item.title);
    return id !== slug;
  });

  return (
    <DefaultLayout>
      <div className="view">
        {cocktail && (
          <div className="w-full">
            {cocktail.cocktailImage && (
              // <img
              //   src={cocktail.cocktailImage}
              //   alt={cocktail.title}
              //   className="w-full"
              // />
              <Image
                src={cocktail.cocktailImage}
                alt="Our Story"
                height={1000}
                width={1500}
                layout="responsive"
                className="mt-20"
                placeholder="blur"
                blurDataURL={cocktail.cocktailImage}
              />
            )}
            <div className="mx-auto w-5/6 lg:w-3/4 shadow-xl lg:-mt-60 -mt-24 py-6 mb-14 relative rounded">
              <div className="Cocktails w-1/2 lg:w-1/3 text-center lg:px-16 bg-dark-brown h-10 lg:h-16 flex items-center justify-center lg:text-xl text-white font-bold">
                <h4>{cocktail.title}</h4>
              </div>
              <div className="ingredients mx-auto w-full p-4 lg:p-10 bg-white">
                <CocktailList html={cocktail.ingredients} title="Ingredients" />
                <CocktailList
                  html={cocktail.instructions}
                  title="Instructions"
                />
              </div>
            </div>
          </div>
        )}
        <div className="cocktail-images px-6 lg:w-3/4 mx-auto">
          <h3 className="text-xl lg:text-3xl text-center font-bold mb-4">
            YOU MAY ALSO LIKE
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 my-10">
            {otherCocktails &&
              otherCocktails.map((item: cocktailItemType) => (
                <CocktailItemView key={item.title} item={item} />
              ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, `/cocktail`));
  return {
    props: {
      cocktails: JSON.stringify(dbResponse.val()),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const db = initializeDB();
  const dataRef = ref(db);
  const dbResponse = await get(child(dataRef, `/cocktail`));

  const dbArray = dbResponse.val();
  const dbkeys = Object.keys(dbArray);
  const paths = dbkeys.map((item) => ({ params: { slug: item } }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
