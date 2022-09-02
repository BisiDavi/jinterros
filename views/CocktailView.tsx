import Image from "next/image";

import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";

export default function CocktailView() {
  return (
    <>
      <section className="w-full">
        <div className="cocktail-group">
          {cocktailcontent.map((item) => (
            <div key={item.img} className="cocktail">
              <Image src={item.img} alt={item.text} height={700} width={870} />
              <div className="text-view bg-dark-brown w-full flex items-center justify-center">
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
      <style jsx>
        {`
          .cocktail-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 70px;
          }
          .text-view {
            height: 60px;
          }
        `}
      </style>
    </>
  );
}
