import Image from "next/image";

interface Props {
  item: {
    img: string;
    text: string;
  };
}

export default function CocktailItemView({ item }: Props) {
  return (
    <div key={item.img} className="cocktail">
      <Image
        src={item.img}
        alt={item.text}
        height={850}
        width={870}
        layout="responsive"
      />
      <div className="text-view h-16 bg-dark-brown w-full flex items-center justify-center">
        <p className="text-white text-center text-xl">{item.text}</p>
      </div>
    </div>
  );
}
