import Image from "next/image";

import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";

export default function CocktailView() {
  return (
    <section className="w-full">
      <div className="cocktail-group grid grid-cols-3 gap-10">
        {cocktailcontent.map((item) => (
          <div key={item.img} className="cocktail">
            <Image src={item.img} alt={item.text} />
            <div className="text-view bg-dark-brown w-full h-20">
              <p className="text-white text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="border border-brown-light px-12 py-4 flex mx-auto my-6"
        text="MORE COCKTAILS"
      />
      <Image src="/cocktail.webp" alt="cocktail" height={1000} width={800} />
    </section>
  );
}
