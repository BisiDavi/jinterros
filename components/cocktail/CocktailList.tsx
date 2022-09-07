interface Props {
  type: "instruction" | "ingredient";
  listArray: string[];
}

export default function CocktailList({ type, listArray }: Props) {
  const title = type === "ingredient" ? "Ingredients" : "Instructions";
  return (
    <div className="my-5 w-full text-center">
      <h6 className="text-2xl text-tan">{title}:</h6>
      <ul>
        {listArray.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
}
