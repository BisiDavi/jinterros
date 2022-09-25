/* eslint-disable react/jsx-key */
import { useMemo, useState } from "react";
import { useTable } from "react-table";

import { readData } from "@/lib/firebaseConfig";

function formatPolicies(data: any) {
  if (data) {
    const dbDatab = Object.values(data);
    const dataArray: any[] = [];
    dbDatab.map((item: any) => {
      const formattedData: any = Object.values(item);
      const parsedData = JSON.parse(formattedData);
      if (parsedData) {
        const date = new Date(parsedData.date);
        dataArray.push({
          ...parsedData,
          authorName: parsedData.author.name,
          date: `${date.toDateString()}, ${date.toLocaleTimeString([], {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          })}`,
        });
      }
    });
    return dataArray;
  }
}

export default function PolicyTable() {
  const [policies, setPolicies] = useState(null);

  readData("/policy", policies, setPolicies);
  const formattedPolicies = formatPolicies(policies);

  const columns: any = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const policyData = formattedPolicies ? formattedPolicies : [];

  const data = useMemo(() => [...policyData], [policies]);

  console.log("data", data);

  const tableState: any = { pageIndex: 0 };

  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
      initialState: tableState,
    });
  return (
    <table {...getTableProps()} className="shadow rounded-xl border">
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
          return (
            <tr className="hover:bg-gray-300">
              <td className="p-4 px-6 border-b">
                <input type="checkbox" value={rowId} />
              </td>
              <td className="p-4 px-6 border-b">{rowId}</td>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
