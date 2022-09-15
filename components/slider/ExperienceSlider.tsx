/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useMediaQuery from "@/hooks/useMediaQuery";
import "@splidejs/react-splide/css";

const slider = {
  big: [
    "/01.webp",
    "/02.webp",
    "/03.webp",
    "/04.webp",
    "/05.webp",
    "/06.webp",
    "/07.webp",
    "/08.webp",
    "/09.webp",
    "/10.webp",
  ],
  small: [
    "/small-01.webp",
    "/small-02.webp",
    "/small-03.webp",
    "/small-04.webp",
    "/small-05.webp",
    "/small-06.webp",
    "/small-07.webp",
    "/small-08.webp",
    "/small-09.webp",
    "/small-10.webp",
  ],
};

export default function ExperienceSlider() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const sliderArray = mobileWidth ? slider.small : slider.big;

  return (
    <Splide
      options={{ rewind: true, autoplay: true }}
      aria-label="get to know us"
      className="mx-auto justify-center flex items-center w-2/3 my-10"
    >
      {sliderArray.map((item) => (
        <SplideSlide key={item}>
          <img src={`/slider/${item}`} alt={item} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
