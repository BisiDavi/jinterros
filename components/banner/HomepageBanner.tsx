import Image from "next/image";

import Button from "@/components/button";
import banner from "@/public/homepage-bg.webp";
import mobileBanner from "@/public/mobile-homepage-bg.webp";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function HomepageBanner() {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const siteBanner = mobileDevice ? mobileBanner : banner;

  return (
    <>
      <section className="homepageBanner 2xl:px-20 pt-10 w-full flex mx-auto my-0">
        <div className="banner lg:-mt-40 -mt-24">
          <Image
            fill
            priority
            src={siteBanner}
            alt="jinterros"
            placeholder="blur"
          />
        </div>
        <div className="container lg:-mt-20 -mt-10 position-relative items-center z-10 pb-14 lg:pb-0 lg:mx-auto flex lg:flex-row flex-col lg:px-0 lg:justify-between">
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
          <div className="lg:w-2/3 -ml-8 md:ml-0 w-full order-1 mt-10 flex mx-auto lg:mt-36 block">
            <Image
              src="/rum-bottles.webp"
              alt="rum-bottles"
              height={878}
              width={878}
              priority
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .banner {
            height: 100vh;
            width: 100%;
            position: absolute;
          }
          .homepageBanner {
            position: relative;
            height: 100vh;
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
            .banner {
              overflow-y: hidden;
            }
            .text-content h3 {
              font-size: 36px;
              line-height: 50px;
              text-align: center;
            }
            .text-content p {
              font-size: 18px;
              line-height: 24px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}
