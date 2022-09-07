import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import storyContent from "@/json/our-story.json";
import Button from "@/components/button";

export default function OurStory() {
  return (
    <DefaultLayout title="Our Story">
      <div className="content mb-24">
        <Image
          src="/our-story-banner.webp"
          alt="Our Story"
          height={1000}
          width={1500}
          layout="responsive"
          className="mt-20"
        />
        <section className="content w-full mt-40">
          <div className="layer w-full">
            <div className="text-content w-2/3 mx-auto my-26">
              {storyContent.map((item) => (
                <div key={item.title} className="text my-10">
                  <h4 className="text-tan font-semibold text-xl">
                    {item.title}
                  </h4>
                  <p className="text-light-tan font-light text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="image-wrapper w-2/5 mx-auto my-40">
          <Image
            src="/rum-bottles-2.webp"
            alt="Rum bottles"
            height={1000}
            width={1000}
            layout="responsive"
          />
        </div>
        <Button
          text="SHOP NOW"
          className="bg-dark-brown hover:opacity-80 mx-auto py-3 px-16 flex my-10 text-white font-bold text-xl w-1/5 justify-center"
          href="/shop"
        />
      </div>
    </DefaultLayout>
  );
}
