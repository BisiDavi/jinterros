/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { readData } from "@/lib/firebaseConfig";
import formatAdminDBData from "@/lib/formatAdminDBData";

export default function useAdminData(dbNode: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      readData(dbNode, data, setData);
    }
  }, [data]);

  const parsedCocktail = data ? formatAdminDBData(data) : null;

  return parsedCocktail;
}
