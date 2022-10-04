/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData, sortDataByDate } from "@/lib/formatDBData";
import useDBMutation from "@/hooks/useDBMutation";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function useProductTable() {
  const [products, setProducts] = useState(null);
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();
  const mobileDevice = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (products === null) {
      readData("/products", products, setProducts);
    }
  }, [products]);

  const formattedProducts = formatDBData(products);

  const columns: any = useMemo(
    () => [
      { Header: "Rum", accessor: "title" },
      { Header: "Price ($)", accessor: "price" },
      { Header: "Alcohol Volume (%)", accessor: "alcoholVolume" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const productData = formattedProducts ? formattedProducts : [];

  const vdata = useMemo(() => [...productData], [products]);

  const data = vdata ? sortDataByDate(vdata) : null;

  return { data, mobileDevice, columns, mutate };
}
