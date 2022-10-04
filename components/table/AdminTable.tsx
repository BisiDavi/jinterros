/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";

import TablePagination from "@/components/table/TablePagination";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function AdminTable({ data }: any) {
  const mobileDevice = useMediaQuery("(max-width:768px)");

  const columns: any = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
    ],
    []
  );
  const tableState: any = { pageIndex: 0, pageSize: data.length };

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: tableState,
    },
    usePagination
  );
  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    getTableBodyProps,
  }: any = tableInstance;
  return (
    <section className="mb-5">
      <h4 className="font-bold mb-1 text-xl">Admin List</h4>
      <table
        {...getTableProps()}
        className="shadow orders-table rounded-xl border"
      >
        <thead className="border-b">
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th className="p-4 px-6">S/N</th>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()} className="p-4 px-6">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row);
            const rowId = i + 1;

            return (
              <tr key={i} className="hover:bg-gray-300">
                <td className="p-4 px-6 border-b lg:text-center">{rowId}</td>
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-4 px-6 border-b lg:text-center"
                  >
                    <a>{cell.render("Cell")}</a>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination flex">
        {!mobileDevice && <TablePagination tableInstance={tableInstance} />}
      </div>
    </section>
  );
}
