/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";

import { readData } from "@/lib/firebaseConfig";
import toSlug from "@/lib/toSlug";
import { formatDBData } from "@/lib/formatDBData";
import Button from "@/components/button";
import useDBMutation from "@/hooks/useDBMutation";

export default function ProductTable() {
  const [products, setProducts] = useState(null);
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();

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

  const data = useMemo(() => [...productData], [products]);

  const tableState: any = { pageIndex: 0 };

  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
      initialState: tableState,
    });

  return (
    <table
      {...getTableProps()}
      className="shadow product-table w-full rounded-xl border"
    >
      <thead className="border-b">
        {headerGroups.map((headerGroup, index) => (
          <tr key={index}>
            <th className="p-4 px-6">S/N</th>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index} className="p-4 px-6">
                {column.render("Header")}
              </th>
            ))}
            <th className="p-4 px-6">Delete</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i: number) => {
          prepareRow(row);
          const rowId = i + 1;
          const rowTitle = data[i].title;
          const title = toSlug(data[i].title);
          return (
            <tr key={i} className="hover:bg-gray-300">
              <td className="p-4 px-6 border-b">{rowId}</td>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                  <Link href={`/admin/products/${title}`} passHref>
                    <a>{cell.render("Cell")}</a>
                  </Link>
                </td>
              ))}
              <td className="p-4 px-6 border-b">
                <Button
                  className="hover:text-red-500 flex items-center mx-auto"
                  icon={<RiDeleteBinLine size={20} />}
                  onClick={() => mutate(`/products/${title}`)}
                  title={`Delete ${rowTitle}`}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
