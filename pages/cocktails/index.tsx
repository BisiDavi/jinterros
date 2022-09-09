import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import allCocktailContent from "@/json/all-cocktails.json";
import CocktailItemView from "@/views/CocktailItemView";

export default function Cocktails() {
  return (
    <DefaultLayout title="Our Cocktails">
      <div className="view mb-24">
        <div className="banner w-full relative">
          <Image
            src="/jinterros-cocktail-banner.webp"
            alt="Our Cocktails"
            height={950}
            width={1400}
            layout="responsive"
          />
          <div className="Cocktails w-52 bg-dark-brown h-16 bottom-0 left-0 absolute flex items-center justify-center text-xl text-white font-bold">
            <h4>COCKTAILS</h4>
          </div>
        </div>
        <div className="cocktail-images container mx-auto">
          <div className="grid grid-cols-3 gap-5 my-10">
            {allCocktailContent.map((item) => (
              <CocktailItemView key={item.img} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
