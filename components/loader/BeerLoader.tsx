/* eslint-disable @next/next/no-img-element */

export default function BeerLoader() {
  return (
    <section className="bg-carton-brown fixed top-0 z-40 h-screen w-screen flex mx-auto justify-center items-center">
      <div className="wrapper rounded-full mx-auto">
        <img src="/beerloading.webp" alt="beer" className="rounded-full h-40 w-40" />
      </div>
    </section>
  );
}
