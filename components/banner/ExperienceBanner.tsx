import Image from "next/image";
import ContentEditable from "react-contenteditable";

interface Props {
  content: {
    title: string;
    content: string;
    banner: string;
  };
}

export default function ExperienceBanner({ content }: Props) {
  return (
    <section className="experience-banner">
      <Image
        src={content.banner}
        alt={content.title}
        height={1000}
        width={1500}
        layout="responsive"
        className="mt-20"
        placeholder="blur"
        blurDataURL={content.banner}
      />
      <ul className="text-content my-6 w-5/6 lg:-my-4 2xl:w-full lg:w-2/3 flex flex-col justify-center mx-auto">
        <ContentEditable
          html={content.content}
          onChange={() => null}
          disabled
        />
      </ul>
    </section>
  );
}
