/* eslint-disable @next/next/no-img-element */
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
      <img src={content.banner} alt={content.title} />
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
