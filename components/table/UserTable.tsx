import { useMemo } from "react";
import { useTable } from "react-table";
import useDBMutation from "@/hooks/useDBMutation";

export default function UserTable({ data }: any) {
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();

  const columns: any = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Date", accessor: "date" },
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
    <section className="mt-4">
      <h4 className="font-bold mb-1 text-xl">User List</h4>
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
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i: number) => {
            prepareRow(row);
            const rowId = i + 1;
            return (
              <tr key={i} className="hover:bg-gray-300">
                <td className="p-4 px-6 border-b lg:text-center">{rowId}</td>
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-4 px-6 border-b lg:text-center"
                    key={index}
                  >
                    <a>{cell.render("Cell")}</a>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
