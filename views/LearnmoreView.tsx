/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";

export default function LearnmoreView() {
  return (
    <section className="learnmore px-5 w-full flex flex-col py-20 lg:py-20 items-center justify-center">
      <img
        src="/JINTERROS.webp"
        className="mx-auto w-2/3 lg:w-auto  lg:mt-40"
        alt="JINTERROS"
        title="JINTERROS"
      />
      <p className="text text-xl text-center lg:w-2/3  mx-auto">
        Jinterros is a family run business.
        <br /> We worked together to create this magnificent drink so everyone
        across the globe can enjoy it with their loved ones.
      </p>
      <Button
        text="LEARN MORE"
        className="border border-brown-light w-3/4 lg:w-1/3 lg:h-20 items-center justify-center text-xl bg-dark-brown-hover hover:text-white lg:px-20 py-4 flex mx-auto my-10 lg:my-24"
      />
    </section>
  );
}
