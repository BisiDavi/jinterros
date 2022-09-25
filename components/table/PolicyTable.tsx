/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useTable } from "react-table";

export default function PolicyTable() {
  const columns: any = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Author", accessor: "authorname" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const data = useMemo(() => [], []);

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
              <td className="p-4 px-6 border-b text-center">
                <input type="checkbox" value={rowId} />
              </td>
              <td className="p-4 px-6 border-b text-center">{rowId}</td>
              {row.cells.map((cell, index) => (
                <td
                  {...cell.getCellProps()}
                  className="p-4 px-6 border-b text-center"
                >
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
