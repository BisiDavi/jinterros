import Image from "next/image";

import Button from "@/components/button";

export default function HomepageBanner() {
  return (
    <>
      <section className="homepageBanner w-full">
        <div className="container mx-auto flex">
          <div className="w-1/2">
            <div className="text-content">
              <h1 className="text-3xl font-bold">JINTERROS</h1>
              <p className="text-sm">Rum with Natural Flavours</p>
              <Button className="bg-dark-brown px-8 py-4" text="ORDER NOW" />
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/run-bottles.webp"
              alt="rum-bottles"
              height={500}
              width={700}
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .homepageBanner {
            background-image: url("/homepage-bg.webp");
          }
        `}
      </style>
    </>
  );
}
