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
  const showThreeCocktail: any = cocktailArray
    ? cocktailArray.slice(0, 3)
    : cocktailArray;

  return (
    <section className="w-full my-6 2xl:px-10  px-5 lg:-mt-10 mb-20">
      <h3 className="title lg:mt-10 lg:mb-16 mb-14">FIND YOUR PERFECT COCKTAIL</h3>
      <div className="cocktail-group grid grid-cols-1 lg:grid-cols-3 gap-7 px-10">
        {cocktailArray &&
          showThreeCocktail.map((item: any) => (
            <CocktailItemView key={item.title} item={item} />
          ))}
      </div>
      <Button
        className="border border-brown-light lg:px-10 py-4 flex mx-auto lg:w-1/5 w-1/2 justify-center items-center mt-12 -mb-10 bg-dark-brown-hover hover:text-white"
        text="MORE COCKTAILS"
        href="/cocktails"
      />
      <CocktailSlider />
      <p className="text-xl description lg:-mt-20 px-3 lg:w-3/5 mx-auto text-center">
        Jinterros Rum is a variety of delicious flavors to create unique
        cocktails. Ready to be used directly without pre-mix. All you need is
        ice and the necessary ingredients.
      </p>
      <style jsx>
        {`
          .title {
            font-family: "Lora", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 41px;
            text-align: center;
            color: #392a17;
          }
          .description {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 44px;
            text-align: center;
          }
          @media (max-width: 768px) {
            .title {
              font-size: 14px;
              line-height: 16px;
            }
            .description {
              font-size: 20px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </section>
  );
}
