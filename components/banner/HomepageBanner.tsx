import Image from "next/image";

import Button from "@/components/button";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner w-full flex mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-1/2 mx-auto flex justify-center">
            <div className="text-content text-white">
              <h1 className="text-8xl font-bold my-4">JINTERROS</h1>
              <p className="text-xl my-2">Rum with Natural Flavours</p>
              <Button
                className="bg-dark-brown hover:opacity-80 px-8 py-4 flex justify-center w-2/3 my-6 font-bold"
                text="ORDER NOW"
              />
            </div>
          </div>
          <div className="w-2/3 mt-52">
            <Image
              src="/rum-bottles.webp"
              alt="rum-bottles"
              height={2500}
              width={1800}
              // layout="responsive"
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
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}
