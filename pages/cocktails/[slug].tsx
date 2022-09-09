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
            <Image
              src={mainContent.banner}
              alt={mainContent.title}
              height={400}
              width={800}
              layout="responsive"
            />
          )}
          <div className="mx-auto w-3/4 shadow-xl -mt-60 py-6 mb-14 relative rounded">
            <div className="Cocktails w-1/3 items-start px-16 bg-dark-brown h-16 flex items-center justify-center text-xl text-white font-bold">
              <h4>{mainContent.title}</h4>
            </div>
            <div className="ingredients mx-auto w-full p-10 bg-white">
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
        <div className="cocktail-images w-3/4 mx-auto">
          <h3 className="text-3xl text-center font-bold mb-4">
            YOU MAY ALSO LIKE
          </h3>
          <div className="grid grid-cols-3 gap-5 my-10">
            {otherCocktails.map((item) => (
              <CocktailItemView key={item.img} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
