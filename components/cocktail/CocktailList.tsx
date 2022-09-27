import ContentEditable from "react-contenteditable";

interface Props {
  title: string;
  html: string;
}

export default function CocktailList({ html, title }: Props) {
  return (
    <div className="my-5 w-full text-center">
      <h6 className="text-2xl text-tan">{title}:</h6>
      <ContentEditable disabled html={html} onChange={() => null} />
    </div>
  );
}
