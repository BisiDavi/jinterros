import Image from "next/image";

import instagramPictures from "@/json/instagramfollow.json";

export default function InstagramFollow() {
  return (
    <section className="container mx-auto my-20 px-5 lg:px-0">
      <h1 className="text-center text-xl lg:text-4xl font-bold lg:my-4">
        FOLLOW JINTERROS ON INSTAGRAM
      </h1>
      <p className="text-center text-md lg:text-xl mb-4 lg:mb-0 lg:my-4">
        Share your great times with Jinterros
      </p>
      <div className="image-grid grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {instagramPictures.map((item) => (
          <Image
            key={item}
            src={item}
            alt={item}
            height={400}
            width={400}
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          />
        ))}
      </div>
    </section>
  );
}
