import ContentEditable from "react-contenteditable";

interface Props {
  title: string;
  html: string;
}

export default function CocktailList({ html, title }: Props) {
  return (
    <div className="my-5 w-4/5 lg:w-2/3  mx-auto flex flex-col">
      <h6 className="text-2xl text-tan">{title}:</h6>
      <ContentEditable
        disabled
        html={html}
        onChange={() => null}
        className="w-full mx-auto text-left"
      />
    </div>
  );
}
