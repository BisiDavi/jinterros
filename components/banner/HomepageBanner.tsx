/* eslint-disable @next/next/no-img-element */

import Button from "@/components/button";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner 2xl:px-20  w-full flex mx-auto my-0">
        <div className="container lg:my-10 lg:mx-auto flex lg:flex-row flex-col px-5 lg:px-0 lg:justify-between items-center">
          <div className="order-2 lg:order-1 lg:w-1/2 mx-auto flex justify-center">
            <div className="text-content text-white">
              <img src="/jinterros-white.webp" alt="Jinterros" />
              <p className="text-xl text-center lg:text-left lg:text-3xl my-2">
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
          <div className="lg:w-2/3 w-full order-1 flex mx-auto lg:mt-40 block">
            <img src="/rum-bottles.webp" alt="rum-bottles" />
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
          @media (max-width: 768px) {
            .homepageBanner {
              height: unset;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
