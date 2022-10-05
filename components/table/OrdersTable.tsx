/* eslint-disable react/jsx-key */
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";

import TablePagination from "@/components/table/TablePagination";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function OrdersTable({ data }: any) {
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const router = useRouter();
  const columns: any = useMemo(
    () => [
      { Header: "Invoice ID", accessor: "invoiceID" },
      { Header: "Date", accessor: "date" },
      { Header: "Customer", accessor: "customer" },
      { Header: "Total", accessor: "total" },
      { Header: "Payment Status", accessor: "paymentStatus" },
      { Header: "Fulfillment Status", accessor: "fulfillmentStatus" },
      { Header: "Items", accessor: "items" },
    ],
    []
  );
  const tableState: any = { pageIndex: 0, pageSize: 4 };
  const tableRoute = router.asPath.includes("/admin/")
    ? "/admin/orders"
    : "/my-orders";

  const tableInstance: any = useTable(
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
        className="shadow orders-table rounded-xl border w-full"
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
            const rowPaymentId = data[i].invoiceID;

            return (
              <tr className="hover:bg-gray-300" {...row.getRowProps()}>
                <td className="p-4 px-6 border-b lg:text-center">{rowId}</td>
                {row.cells.map((cell: any) => {
                  const cellClassName =
                    cell.column.Header === "Fulfillment Status"
                      ? cell.value
                      : "";
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`p-4 px-6 border-b lg:text-center ${cellClassName}`}
                    >
                      <Link href={`${tableRoute}/${rowPaymentId}`} passHref>
                        <a>{cell.render("Cell")}</a>
                      </Link>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!mobileDevice && <TablePagination tableInstance={tableInstance} />}
    </>
  );
}
