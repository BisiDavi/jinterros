import { useEffect, useState } from "react";

import { readData } from "@/lib/firebaseConfig";

export default function CocktailTable() {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    if (cocktail === null) {
      readData("/cocktail", cocktail, setCocktail);
    }
  }, [cocktail]);

  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}
