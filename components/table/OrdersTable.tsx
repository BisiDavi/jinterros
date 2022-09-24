/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  TableState,
} from "react-table";

import orderTableData from "@/json/order-table.json";

export default function OrdersTable() {
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

  const data = useMemo(() => [...orderTableData], []);

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
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="p-4 px-6">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr>
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
