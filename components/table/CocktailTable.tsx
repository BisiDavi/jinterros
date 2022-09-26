/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import Link from "next/link";

import toSlug from "@/lib/toSlug";
import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";

export default function CocktailTable() {
  const [cocktail, setCocktail] = useState(null);

  const parsedCocktail = cocktail ? JSON.parse(cocktail) : null;

  useEffect(() => {
    if (cocktail === null) {
      readData("/cocktail", cocktail, setCocktail);
    }
  }, [cocktail]); 

  const formattedCocktail = formatDBData(parsedCocktail);

  const columns: any = useMemo(
    () => [
      { Header: "Cocktail", accessor: "title" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );

  const cocktailData = formattedCocktail ? formattedCocktail : [];

  const data = useMemo(() => [...cocktailData], [parsedCocktail]);

  const tableState: any = { pageIndex: 0 };

  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
      initialState: tableState,
    });

  return (
    <table {...getTableProps()} className="shadow w-full rounded-xl border">
      <thead className="border-b">
        {headerGroups.map((headerGroup, index) => (
          <tr key={index}>
            <th className="p-4 px-6">
              <input type="checkbox" value="all" />
            </th>
            <th className="p-4 px-6">S/N</th>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="p-4 px-6">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i: number) => {
          prepareRow(row);
          const rowId = i + 1;
          const title = toSlug(data[i].title);
          return (
            <tr className="hover:bg-gray-300">
              <td className="p-4 px-6 border-b">
                <input type="checkbox" value={rowId} />
              </td>

              <td className="p-4 px-6 border-b">{rowId}</td>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                  <Link href={`/admin/cocktails/${title}`} passHref>
                    <a>{cell.render("Cell")}</a>
                  </Link>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
