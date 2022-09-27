import Image from "next/image";
import Link from "next/link";

import toSlug from "@/lib/toSlug";
import type { cocktailItemType } from "@/types";
interface Props {
  item: cocktailItemType;
}

export default function CocktailItemView({ item }: Props) {
  const itemLink = toSlug(item.title);
  return (
    <Link href={`/cocktails/${itemLink}`} passHref>
      <a
        key={item.cocktailImage}
        className="cocktail"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Image
          src={item.cocktailImage}
          alt={item.title}
          height={650}
          width={800}
          layout="responsive"
          placeholder="blur"
          blurDataURL={item.cocktailImage}
        />
        <div className="text-view h-10 lg:h-16 bg-dark-brown w-full flex items-center justify-center hover:opacity-80">
          <p className="text-white text-center text-base  lg:text-xl">
            {item.title}
          </p>
        </div>
      </a>
    </Link>
  );
}
