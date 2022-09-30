import Button from "@/components/button";
import CocktailItemView from "@/views/CocktailItemView";
import CocktailSlider from "@/components/slider/CocktailSlider";
import { cocktailItemType } from "@/types";
import { formatDBData } from "@/lib/formatDBData";

interface Props {
  cocktails: string;
}

export default function CocktailView({ cocktails }: Props) {
  const parsedCocktail = JSON.parse(cocktails);
  const cocktailArray: cocktailItemType[] | undefined =
    formatDBData(parsedCocktail);
  return (
    <section className="w-full my-6 2xl:px-10  px-5 lg:mt-20 mb-20">
      <div className="cocktail-group grid grid-cols-1 lg:grid-cols-3 gap-7">
        {cocktailArray &&
          cocktailArray.map((item) => (
            <CocktailItemView key={item.title} item={item} />
          ))}
      </div>
      <Button
        className="border border-brown-light lg:px-10 py-4 flex mx-auto lg:w-1/5 w-1/2 justify-center items-center mt-12 -mb-10 bg-dark-brown-hover hover:text-white"
        text="MORE COCKTAILS"
        href="/cocktails"
      />
      <CocktailSlider />
      <p className="text-xl lg:-mt-20  lg:w-2/5 mx-auto text-center">
        Jinterros Rum is a variety of delicious flavors to create unique
        cocktails. Ready to be used directly without pre-mix. All you need is
        ice and the necessary ingredients.
      </p>
    </section>
  );
}
