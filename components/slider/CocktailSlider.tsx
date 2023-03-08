/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const cocktailImages = [
  "/slider/cocktail-1.webp",
  "/slider/cocktail-2.webp",
  "/slider/cocktail-3.webp",
  "/slider/cocktail-4.webp",
];

export default function CocktailSlider() {
  return (
    <Splide
      options={{ rewind: true, autoplay: true, pagination: false }}
      aria-label="our cocktails"
      className="mx-auto justify-center flex items-center container my-10"
    >
      {cocktailImages.map((item) => (
        <SplideSlide key={item}>
          <img src={item} alt={item} className="-ml-14 lg:-ml-40" />
        </SplideSlide>
      ))}
    </Splide>
  );
}
