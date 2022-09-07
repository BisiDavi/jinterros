interface Props {
  type: "instruction" | "ingredient";
  listArray: string[];
}

export default function CocktailList({ type, listArray }: Props) {
  const title = type === "ingredient" ? "Ingredients" : "Instructions";
  return (
    <div className="my-5">
      <h6>{title}:</h6>
      <ul>
        {listArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
