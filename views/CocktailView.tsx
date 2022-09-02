import Image from "next/image";

import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";

export default function CocktailView() {
  return (
    <section>
      <div className="cocktail-group">
        {cocktailcontent.map((item) => (
          <div key={item.img} className="cocktail">
            <Image src={item.img} alt={item.text} />
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
      <Button
        className="border border-brown-light px-12 py-4 flex mx-auto my-6"
        text="MORE COCKTAILS"
      />
    </section>
  );
}
