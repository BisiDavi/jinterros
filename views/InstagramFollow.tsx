import Image from "next/image";

import instagramPictures from "@/json/instagramfollow.json";

export default function InstagramFollow() {
  return (
    <section className="container mx-auto my-20">
      <h1 className="text-center text-4xl font-bold my-4">
        FOLLOW JINTERROS ON INSTAGRAM
      </h1>
      <p className="text-center text-xl my-4">
        Share your great times with Jinterros
      </p>
      <div className="image-grid grid grid-cols-3 gap-6">
        {instagramPictures.map((item) => (
          <Image key={item} src={item} alt={item} height={400} width={400} />
        ))}
      </div>
    </section>
  );
}
