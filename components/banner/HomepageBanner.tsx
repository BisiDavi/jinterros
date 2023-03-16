/* eslint-disable @next/next/no-img-element */

import Button from "@/components/button";
import Image from "next/image";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner 2xl:px-20  w-full flex mx-auto my-0">
        <div className="container pb-14 lg:pb-0 lg:my-10 lg:mx-auto flex lg:flex-row flex-col px-5 lg:px-0 lg:justify-between items-center">
          <div className="order-2 lg:order-1 lg:w-1/2 mx-auto flex justify-center px-0">
            <div className="text-content text-white px-0">
              <h3>
                Experience the <br /> New Taste of Rum
              </h3>
              <p className="text-xl lg:text-3xl text-center lg:text-left">
                Each sip will take you on a sensory Journey.
              </p>
              <Button
                href="/shop"
                className="bg-dark-brown mx-auto mt-8 lg:mx-0  hover:opacity-80 px-8 py-4 flex justify-center w-2/3 my-6 font-bold"
                text="SHOP NOW"
              />
            </div>
          </div>
          <div className="lg:w-2/3 w-full order-1 flex mx-auto lg:mt-40 block">
            <Image
              src="/rum-bottles.webp"
              alt="rum-bottles"
              className="-ml-4 lg:ml-0"
              height={878}
              width={878}
              priority
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
            width: 100%;
          }
          .text-content h3 {
            font-family: "Lora", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 60px;
            line-height: 78px;
            margin-bottom: 0px;
          }
          .text-content p {
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 29px;
          }
          @media (max-width: 768px) {
            .homepageBanner {
              height: unset;
              width: 100%;
              background-image: url("/mobile-homepage-bg.webp");
            }
          }
        `}
      </style>
    </>
  );
}
