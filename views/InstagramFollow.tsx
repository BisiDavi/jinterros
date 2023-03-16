import Image from "next/image";

import instagramPictures from "@/json/instagramfollow.json";

export default function InstagramFollow() {
  return (
    <section className="2xl:px-10 instagramfollow container mx-auto my-20 px-5 lg:px-0">
      <h1 className="text-center text-xl lg:text-4xl font-bold lg:my-4">
        FOLLOW JINTERROS ON INSTAGRAM
      </h1>
      <p className="text-center text-md lg:text-xl mb-4 lg:my-4">
        Share your great times with Jinterros
      </p>
      <div className="image-grid grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {instagramPictures.map((item) => (
          <Image
            key={item}
            src={item}
            alt="instagram"
            height={400}
            width={400}
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          />
        ))}
      </div>
      <style jsx>
        {`
          .instagramfollow h1 {
            font-family: "Lora", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 56px;
            line-height: 72px;
            color: #3a3a3a;
          }
          .instagramfollow p {
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 34px;
          }
          @media (max-width: 768px) {
            .instagramfollow h1 {
              font-size: 32px;
              line-height: 40px;
            }
            .instagramfollow p {
              font-size: 20px;
              line-height: 30px;
            }
          }
        `}
      </style>
    </section>
  );
}
