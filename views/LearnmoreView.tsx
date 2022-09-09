/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";

export default function LearnmoreView() {
  return (
    <>
      <section className="learnmore w-full flex flex-col py-20 items-center justify-center">
        <img
          src="/JINTERROS.webp"
          className="mx-auto mt-40"
          alt="JINTERROS"
          title="JINTERROS"
        />
        <p className="text text-xl text-center w-2/3  mx-auto">
          Jinterros is a family run business.
          <br /> We worked together to create this magnificent drink so everyone
          across the globe can enjoy it with their loved ones.
        </p>
        <Button
          text="LEARN MORE"
          className="border border-brown-light w-1/3 h-20 items-center justify-center text-xl bg-dark-brown-hover hover:text-white px-20 py-4 flex mx-auto my-24"
        />
      </section>
      <style jsx>
        {`
          .learnmore {
            background-image: url("/learn-more-bg.webp");
          }
          .border {
            height: 5px;
          }
        `}
      </style>
    </>
  );
}
