/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import useDBMutation from "@/hooks/useDBMutation";
import useMediaQuery from "./useMediaQuery";

export default function useCocktailTable() {
  const [cocktail, setCocktail] = useState(null);
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();
  const mobileDevice = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (cocktail === null) {
      readData("/cocktail", cocktail, setCocktail);
    }
  }, [cocktail]);

  const formattedCocktail = formatDBData(cocktail);

  const columns: any = useMemo(
    () => [
      { Header: "Cocktail", accessor: "title" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );

  const cocktailData = formattedCocktail ? formattedCocktail : [];

  const data = useMemo(() => [...cocktailData], [cocktail]);

  return {
    data,
    columns,
    mutate,
    mobileDevice,
  };
}
