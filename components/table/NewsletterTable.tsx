/* eslint-disable react/jsx-key */
import { usePagination, useTable } from "react-table";

import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import useNewsletterTable from "@/hooks/useNewsletterTable";
import TablePagination from "@/components/table/TablePagination";

export default function NewsletterTable() {
  const { mobileDevice, columns, data, newsletter } = useNewsletterTable();

  const tableState: any = { pageIndex: 0, pageSize: 3 };

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
      {newsletter === null ? (
        <SpinnerLoader loadingText="fetching newsletter ..." />
      ) : (
        <>
          <table
            {...getTableProps()}
            className="shadow page-table w-full rounded-xl border"
          >
            <thead className="border-b">
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  <th className="p-4 px-6 text-left">S/N</th>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      {...column.getHeaderProps()}
                      className="p-4 px-6 text-left"
                    >
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
                  <tr
                    key={i}
                    className="hover:bg-gray-300"
                    {...row.getRowProps()}
                  >
                    <td className="p-4 px-6 border-b">{rowId}</td>
                    {row.cells.map((cell: any) => (
                      <td
                        {...cell.getCellProps()}
                        className="p-4 px-6 border-b"
                      >
                        <a>{cell.render("Cell")}</a>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination w-full flex justify-center">
            {!mobileDevice && <TablePagination tableInstance={tableInstance} />}
          </div>
        </>
      )}
    </>
  );
}
