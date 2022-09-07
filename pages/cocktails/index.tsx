import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import allCocktailContent from "@/json/all-cocktails.json";
import CocktailItemView from "@/views/CocktailItemView";

export default function Cocktails() {
  return (
    <DefaultLayout title="Our Cocktails">
      <div className="view">
        <div className="banner w-full">
          <Image
            src="/jinterros-cocktail-banner.webp"
            alt="Our Cocktails"
            height={950}
            width={1400}
            layout="responsive"
          />
          <div className="Cocktails">
            <h4>Cocktails</h4>
          </div>
        </div>
        <div className="cocktail-images container">
          {allCocktailContent.map((item) => (
            <CocktailItemView key={item.img} item={item} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
