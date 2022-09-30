/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";

import { readData } from "@/lib/firebaseConfig";
import toSlug from "@/lib/toSlug";
import { formatDBData } from "@/lib/formatDBData";
import Button from "@/components/button";
import useDBMutation from "@/hooks/useDBMutation";

export default function PolicyTable() {
  const [policies, setPolicies] = useState(null);
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();

  useEffect(() => {
    if (policies === null) {
      readData("/policy", policies, setPolicies);
    }
  }, [policies]);

  const formattedPolicies = formatDBData(policies);

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

  const tableState: any = { pageIndex: 0 };

  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
      initialState: tableState,
    });

  return (
    <>
      <h4 className="text-center font-bold text-xl my-2">Policies</h4>
      <table
        {...getTableProps()}
        className="shadow policy-table w-full rounded-xl border"
      >
        <thead className="border-b">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index}>
              <th className="p-4 px-6 text-left">S/N</th>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="p-4 px-6 text-left"
                >
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
            const rowTitle = data[i].title;
            const title = toSlug(data[i].title);
            return (
              <tr key={i} className="hover:bg-gray-300">
                <td className="p-4 px-6 border-b">{rowId}</td>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-4 px-6 border-b">
                    <Link href={`/admin/policies/${title}`} passHref>
                      <a>{cell.render("Cell")}</a>
                    </Link>
                  </td>
                ))}
                <td className="p-4 px-6 border-b">
                  <Button
                    className="hover:text-red-500 flex items-center lg:mx-auto"
                    icon={<RiDeleteBinLine size={20} />}
                    onClick={() => mutate(`/policy/${title}`)}
                    title={`Delete ${rowTitle}`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
