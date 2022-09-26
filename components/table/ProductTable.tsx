/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import Link from "next/link";

import { readData } from "@/lib/firebaseConfig";
import toSlug from "@/lib/toSlug";
import { formatDBData } from "@/lib/formatDBData";

export default function ProductTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (products === null) {
      readData("/products", products, setProducts);
    }
  }, [products]);

  const formattedPolicies = formatDBData(products);

  const columns: any = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const policyData = formattedPolicies ? formattedPolicies : [];

  const data = useMemo(() => [...policyData], [products]);

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
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index} className="p-4 px-6">
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
            <tr key={i} className="hover:bg-gray-300">
              <td className="p-4 px-6 border-b">
                <input type="checkbox" value={rowId} />
              </td>

              <td className="p-4 px-6 border-b">{rowId}</td>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                  <Link href={`/admin/products/${title}`} passHref>
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
