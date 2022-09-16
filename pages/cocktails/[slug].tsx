/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/DefaultLayout";
import allCocktailContent from "@/json/all-cocktails.json";
import CocktailItemView from "@/views/CocktailItemView";
import toSlug from "@/lib/toSlug";
import CocktailList from "@/components/cocktail/CocktailList";

export default function CocktailPage() {
  const router = useRouter();
  const { query } = router;
  const slugValue = query.slug;

  const mainContent = allCocktailContent.filter((item) => {
    const id = toSlug(item.title);
    return id === slugValue;
  })[0];

  const otherCocktails = allCocktailContent.filter((item) => {
    const id = toSlug(item.title);
    return id !== slugValue;
  });

  return (
    <DefaultLayout>
      <div className="view">
        <div className="w-full">
          {mainContent.banner && (
            <img
              src={mainContent.banner}
              alt={mainContent.title}
              className="w-full"
            />
          )}
          <div className="mx-auto w-5/6 lg:w-3/4 shadow-xl lg:-mt-60 -mt-24 py-6 mb-14 relative rounded">
            <div className="Cocktails w-1/2 lg:w-1/3 text-center lg:px-16 bg-dark-brown h-10 lg:h-16 flex items-center justify-center lg:text-xl text-white font-bold">
              <h4>{mainContent.title}</h4>
            </div>
            <div className="ingredients mx-auto w-full p-4 lg:p-10 bg-white">
              <CocktailList
                type="ingredient"
                listArray={mainContent.ingredients}
              />
              <CocktailList
                type="instruction"
                listArray={mainContent.instructions}
              />
            </div>
          </div>
        </div>
        <div className="cocktail-images px-6 lg:w-3/4 mx-auto">
          <h3 className="text-xl lg:text-3xl text-center font-bold mb-4">
            YOU MAY ALSO LIKE
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 my-10">
            {otherCocktails.map((item) => (
              <CocktailItemView key={item.img} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
