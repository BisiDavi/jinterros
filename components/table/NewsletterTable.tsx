/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import { readData } from "@/lib/firebaseConfig";
import { formatNewsletter } from "@/lib/formatDBData";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";

export default function NewsletterTable() {
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    if (newsletter === null) {
      readData("/newsletter", newsletter, setNewsletter);
    }
  }, [newsletter]);

  const formattedNewsletter =
    newsletter !== null ? formatNewsletter(newsletter) : null;

  const columns: any = useMemo(
    () => [
      { Header: "E-mail", accessor: "email" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const newsletterData = formattedNewsletter ? formattedNewsletter : [];

  const data = useMemo(() => [...newsletterData], [newsletter]);

  const tableState: any = { pageIndex: 0 };

  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
      initialState: tableState,
    });

  return (
    <>
      {newsletter === null ? (
        <SpinnerLoader loadingText="fetching newsletter ..." />
      ) : (
        <table
          {...getTableProps()}
          className="shadow page-table w-full rounded-xl border"
        >
          <thead className="border-b">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index}>
                <th className="p-4 px-6">S/N</th>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps()}
                    key={index}
                    className="p-4 px-6 text-left"
                  >
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
              return (
                <tr key={i} className="hover:bg-gray-300">
                  <td className="p-4 px-6 border-b">{rowId}</td>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                      <a>{cell.render("Cell")}</a>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
