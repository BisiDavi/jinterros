import Image from "next/image";

export default function BeerLoader() {
  return (
    <section className="bg-gray-100 h-screen w-full flex mx-auto justify-center items-center">
      <div className="wrapper rounded-full mx-auto">
        <Image
          src="/beerloading.webp"
          alt="beer"
          className="rounded-full"
          height={200}
          width={200}
        />
      </div>
    </section>
  );
}
