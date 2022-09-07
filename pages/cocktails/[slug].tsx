import Image from "next/image";
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/DefaultLayout";
import allCocktailContent from "@/json/all-cocktails.json";
import CocktailItemView from "@/views/CocktailItemView";
import toSlug from "@/lib/toSlug";

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
        <div className="banner w-full">
          {mainContent.banner && (
            <Image
              src={mainContent.banner}
              alt={mainContent.title}
              height={950}
              width={1400}
              layout="responsive"
            />
          )}
          <div className="Cocktails">
            <h4>{mainContent.title}</h4>
          </div>
        </div>
        <div className="cocktail-images container">
          {otherCocktails.map((item) => (
            <CocktailItemView key={item.img} item={item} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
