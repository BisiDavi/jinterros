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
      <div className="text-content px-6 lg:px-0 lg:my-6 w-full lg:-my-4 2xl:w-full lg:w-2/3 flex flex-col justify-center mx-auto">
        <ContentEditable
          html={content.content}
          onChange={() => null}
          disabled
        />
      </div>
    </section>
  );
}
