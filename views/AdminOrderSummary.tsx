import Link from "next/link";

import links from "@/json/links.json";
import dynamic from "next/dynamic";

const DoughnutChart = dynamic(
  () =>
    import(
      /** webpackChunkName:DoughnutChart  */ "@/components/chart/Doughtnut"
    ),
  {
    ssr: false,
  }
);

export default function AdminOrderSummary() {
  return (
    <div className="shadow rounded-xl flex flex-col items-start bg-white py-6 mt-10 pb-16">
      <div className="top h-16 justify-between flex items-center border-b w-full mb-4 px-8">
        <h4 className="text-2xl">Order Summary</h4>
      </div>
      <div className="content w-full px-8 flex items-start justify-between">
        <div className="cards w-1/2 mr-4">
          <ul className="flex items-center rounded-xl orange-light mt-2 p-4 w-full hover:opacity-80">
            <li className="rounded-xl mr-10 text-white font-bold bg-orange w-20 justify-center text-3xl h-16 flex items-center">
              25
            </li>
            <li className="text-lg mr-10">Lastest Orders</li>
            <li>
              <Link href="/admin/orders">
                <a className="underline text-gray-500 hover:text-blue-500 text-sm">
                  Manage Orders
                </a>
              </Link>
            </li>
          </ul>
          <ul className="card-group mt-6 grid grid-cols-3 w-full gap-10">
            {links.orders.map((item) => (
              <li
                key={item.count}
                className="shadow rounded-xl text-center py-1 hover:bg-gray-100 bg-white"
              >
                <h4 className="text-3xl font-medium">{item.count}</h4>
                <p className="text-md my-1">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <DoughnutChart />
      </div>
    </div>
  );
}
