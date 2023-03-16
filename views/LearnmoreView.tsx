/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";

export default function LearnmoreView() {
  return (
    <section className="learnmore px-5 w-full flex flex-col py-20 lg:py-40 items-center justify-center">
      <h1 className="my-4">ABOUT JINTERROS</h1>
      <p className="text text-xl text-center lg:w-2/3  mx-auto">
        Jinterros is a family run business.
        <br /> We worked together to create this magnificent drink so everyone
        across the globe can enjoy it with their loved ones.
      </p>
      <Button
        text="LEARN MORE"
        href="/our-story"
        className="border border-brown-light w-3/4 lg:w-1/3 lg:h-20 items-center justify-center text-xl bg-dark-brown-hover hover:text-white lg:px-20 py-4 flex mx-auto my-10 lg:mt-24"
      />
      <style jsx>
        {`
          .learnmore h1 {
            font-family: "Lora", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 56px;
            line-height: 69px;
            color: #392a17;
          }
          .learnmore p {
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 44px;
            text-align: center;
            color: #3a3a3a;
          }

          @media (max-width: 768px) {
            .learnmore h1 {
              font-size: 32px;
              line-height: 44px;
            }
            .learnmore p {
              font-size: 20px;
              line-height: 28px;
            }
          }
        `}
      </style>
    </section>
  );
}
