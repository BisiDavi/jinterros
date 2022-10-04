/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { usePagination, useTable } from "react-table";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";

import toSlug from "@/lib/toSlug";
import Button from "@/components/button";
import TablePagination from "@/components/table/TablePagination";
import useProductTable from "@/hooks/useProductTable";

export default function ProductTable() {
  const { data, mobileDevice, columns, mutate } = useProductTable();

  const tableState: any = { pageIndex: 0 };

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
    <>
      <table
        {...getTableProps()}
        className="shadow product-table w-full rounded-xl border"
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
              <th className="p-4 px-6">Delete</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row);
            const rowId = i + 1;
            const rowTitle = data[i].title;
            const title = toSlug(data[i].title);
            return (
              <tr className="hover:bg-gray-300" {...row.getRowProps()}>
                <td className="p-4 px-6 border-b">{rowId}</td>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                    <Link href={`/admin/products/${title}`} passHref>
                      <a>{cell.render("Cell")}</a>
                    </Link>
                  </td>
                ))}
                <td className="p-4 px-6 border-b">
                  <Button
                    className="hover:text-red-500 flex items-center lg:mx-auto"
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
      <div className="pagination flex items-center justify-center w-full">
        {!mobileDevice && <TablePagination tableInstance={tableInstance} />}
      </div>
    </>
  );
}
