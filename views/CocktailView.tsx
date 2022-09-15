import Image from "next/image";

import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";
import CocktailItemView from "@/views/CocktailItemView";
import CocktailSlider from "@/components/slider/CocktailSlider";

export default function CocktailView() {
  return (
    <section className="w-full mt-40 mb-20">
      <div className="cocktail-group grid grid-cols-3 gap-7">
        {cocktailcontent.map((item) => (
          <CocktailItemView key={item.img} item={item} />
        ))}
      </div>
      <Button
        className="border border-brown-light px-20 py-4 flex mx-auto mt-12 -mb-10 bg-dark-brown-hover hover:text-white"
        text="MORE COCKTAILS"
      />
      <div className="image-wrapper mx-auto block w-1/2  justify-center">
        <CocktailSlider />
        <p className="text-xl -mt-36 w-2/3 mx-auto text-center">
          Jinterros Rum is a variety of delicious flavors to create unique
          cocktails. Ready to be used directly without pre-mix. All you need is
          ice and the necessary ingredients.
        </p>
      </div>
    </section>
  );
}
