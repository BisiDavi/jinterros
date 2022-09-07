import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import storyContent from "@/json/our-story.json";

export default function OurStory() {
  return (
    <DefaultLayout title="Our Story">
      <>
        <Image
          src="/our-story-banner.webp"
          alt="Our Story"
          height={1000}
          width={1500}
          layout="responsive"
        />
        <section className="content w-full">
          <div className="layer w-full">
            <div className="text-content w-2/3 mx-auto">
              {storyContent.map((item) => (
                <div key={item.title} className="text my-6">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </DefaultLayout>
  );
}
