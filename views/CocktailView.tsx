import Image from "next/image";

import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";
import CocktailItemView from "@/views/CocktailItemView";

export default function CocktailView() {
  return (
    <section className="w-full mt-40 mb-20">
      <div className="cocktail-group grid grid-cols-3 gap-7">
        {cocktailcontent.map((item) => (
          <CocktailItemView key={item.img} item={item} />
        ))}
      </div>
      <Button
        className="border border-brown-light px-20 py-4 flex mx-auto my-12 bg-dark-brown-hover hover:text-white"
        text="MORE COCKTAILS"
      />
      <div className="image-wrapper mx-auto block w-1/2 justify-center">
        <Image
          src="/cocktail.webp"
          alt="cocktail"
          height={700}
          width={700}
          layout="responsive"
        />
      </div>
    </section>
  );
}
