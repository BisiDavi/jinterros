import cocktailcontent from "@/json/cocktail.json";
import Button from "@/components/button";
import CocktailItemView from "@/views/CocktailItemView";
import CocktailSlider from "@/components/slider/CocktailSlider";

export default function CocktailView() {
  return (
    <section className="w-full my-10 2xl:px-10  px-5 lg:mt-40 mb-20">
      <div className="cocktail-group grid grid-cols-1 lg:grid-cols-3 gap-7">
        {cocktailcontent.map((item) => (
          <CocktailItemView key={item.img} item={item} />
        ))}
      </div>
      <Button
        className="border border-brown-light px-20 py-4 flex mx-auto mt-12 -mb-10 bg-dark-brown-hover hover:text-white"
        text="MORE COCKTAILS"
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
