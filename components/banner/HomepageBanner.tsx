import Image from "next/image";

import Button from "@/components/button";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner w-full flex mx-auto">
        <div className="container my-10 lg:mx-auto flex lg:flex-row flex-col px-5 lg:justify-between items-center">
          <div className="order-2 lg:order-1 lg:w-1/2 mx-auto flex justify-center">
            <div className="text-content text-white">
              <h1 className="text-2xl text-center lg:text-left lg:text-8xl font-bold lg:my-4">
                JINTERROS
              </h1>
              <p className="text-xl lg:text-3xl my-2">
                Rum with Natural Flavours
              </p>
              <p className="text-xl lg:text-3xl text-center lg:text-left lg:w-4/5  lg:mt-6 my-2">
                There is no wrong time to drink Jinterros. Enjoy it whenever.
              </p>
              <Button
                href="/shop"
                className="bg-dark-brown mx-auto lg:mx-0  hover:opacity-80 px-8 py-4 flex justify-center w-2/3 my-6 font-bold"
                text="SHOP NOW"
              />
            </div>
          </div>
          <div
            className="lg:w-2/3 order-1 mx-auto lg:mt-40 block"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              src="/rum-bottles.webp"
              alt="rum-bottles"
              height={2400}
              width={2000}
              layout="responsive"
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .homepageBanner {
            background-image: url("/homepage-bg.webp");
            background-repeat: no-repeat;
            background-size: cover;
            height: 85vh;
          }
        `}
      </style>
    </>
  );
}
