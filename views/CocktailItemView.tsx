import toSlug from "@/lib/toSlug";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: {
    img: string;
    title: string;
  };
  link?: boolean;
}

export default function CocktailItemView({ item, link }: Props) {
  const itemLink = toSlug(item.title);
  return (
    <>
      {link ? (
        <Link href={`/cocktails/${itemLink}`} passHref >
          <a key={item.img} className="cocktail">
            <Image
              src={item.img}
              alt={item.title}
              height={850}
              width={870}
              layout="responsive"
            />
            <div className="text-view h-16 bg-dark-brown w-full flex items-center justify-center">
              <p className="text-white text-center text-xl">{item.title}</p>
            </div>
          </a>
        </Link>
      ) : (
        <div key={item.img} className="cocktail">
          <Image
            src={item.img}
            alt={item.title}
            height={850}
            width={870}
            layout="responsive"
          />
          <div className="text-view h-16 bg-dark-brown w-full flex items-center justify-center">
            <p className="text-white text-center text-xl">{item.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
