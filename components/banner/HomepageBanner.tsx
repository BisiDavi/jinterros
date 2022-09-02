import Image from "next/image";

import Button from "@/components/button";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner w-full flex mx-auto">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2 mx-auto flex justify-center">
            <div className="text-content text-white">
              <h1 className="text-4xl text-center font-bold my-4">JINTERROS</h1>
              <p className="text-xl my-2 text-center">
                Rum with Natural Flavours
              </p>
              <Button
                className="bg-dark-brown px-8 py-4 flex mx-auto"
                text="ORDER NOW"
              />
            </div>
          </div>
          {/* <div className="w-2/4"> */}
          <Image
            src="/rum-bottles.webp"
            alt="rum-bottles"
            height={2500}
            width={2000}
            // layout="responsive"
          />
          {/* </div> */}
        </div>
      </section>
      <style jsx>
        {`
          .homepageBanner {
            background-image: url("/homepage-bg.webp");
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
