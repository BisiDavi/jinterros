/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useMemo } from "react";
import { useTable } from "react-table";
import { RiDeleteBinLine } from "react-icons/ri";

import Button from "@/components/button";
import useDBMutation from "@/hooks/useDBMutation";

export default function OrdersTable({ data }: any) {
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();

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
      className="shadow orders-table rounded-xl border"
    >
      <thead className="border-b">
        {headerGroups.map((headerGroup, index) => (
          <tr key={index}>
            <th className="p-4 px-6">S/N</th>
            {headerGroup.headers.map((column, ind) => (
              <th {...column.getHeaderProps()} key={ind} className="p-4 px-6">
                {column.render("Header")}
              </th>
            ))}
            <th className="">Delete</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i: number) => {
          prepareRow(row);
          const rowId = i + 1;
          const rowPaymentId = data[i].invoiceID;

          return (
            <tr key={i} className="hover:bg-gray-300">
              <td className="p-4 px-6 border-b lg:text-center">{rowId}</td>
              {row.cells.map((cell, index) => (
                <td
                  {...cell.getCellProps()}
                  className="p-4 px-6 border-b lg:text-center"
                  key={index}
                >
                  <Link href={`/admin/orders/${rowPaymentId}`} passHref>
                    <a>{cell.render("Cell")}</a>
                  </Link>
                </td>
              ))}
              <td className="p-4 px-6 border-b lg:text-center">
                <Button
                  className="hover:text-red-500 flex items-center"
                  icon={<RiDeleteBinLine size={20} />}
                  // onClick={() => mutate(`/cocktail/${title}`)}
                  // title={`Delete ${rowTitle}`}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
