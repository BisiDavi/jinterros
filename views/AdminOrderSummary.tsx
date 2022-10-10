import Link from "next/link";
import dynamic from "next/dynamic";

import links from "@/json/links.json";
import useOrders from "@/hooks/useOrders";

const DoughnutChart = dynamic(
  () =>
    import(
      /* webpackChunkName: 'DoughnutChart'  */ "@/components/chart/Doughtnut"
    ),
  {
    ssr: false,
  }
);

export default function AdminOrderSummary() {
  const { formattedOrders, useMemoizedOrderData } = useOrders();
  const memoizedOrders = useMemoizedOrderData(formattedOrders);

  function getOrderTypeNumber(type: "Fulfilled" | "Unfulfilled" | "Cancelled") {
    if (memoizedOrders) {
      return memoizedOrders.filter((item) => item.fulfillmentStatus === type)
        .length;
    }
    return 0;
  }

  function deliveryStatusCount(status: string) {
    return status === "On Delivery"
      ? getOrderTypeNumber("Unfulfilled")
      : status === "Delivered"
      ? getOrderTypeNumber("Fulfilled")
      : getOrderTypeNumber("Cancelled");
  }

  const totalOrders = formattedOrders?.length;
  return (
    <div className="shadow rounded-xl border flex flex-col items-start bg-white py-6 mt-10 pb-16">
      <div className="top h-16 justify-between flex items-center border-b w-full mb-4 px-8">
        <h4 className="text-2xl">Order Summary</h4>
      </div>
      <div className="content flex-col lg:flex-row w-full lg:px-8 px-4 flex items-start justify-between">
        <div className="cards lg:w-1/2 w-full lg:mr-4">
          <ul className="flex items-center rounded-xl orange-light mt-2 p-2 lg:p-4 w-full hover:opacity-80 justify-between">
            <li className="rounded-xl lg:mr-10 text-white font-bold bg-orange w-14 h-14 lg:w-20 justify-center text-2xl lg:text-3xl lg:h-16 flex items-center">
              {totalOrders}
            </li>
            <li className="text-sm lg:text-lg font-medium lg:mr-10">
              Latest Orders
            </li>
            <li>
              <Link href="/admin/orders">
                <a className="underline text-gray-500 hover:text-blue-500 text-sm">
                  Manage Orders
                </a>
              </Link>
            </li>
          </ul>
          <ul className="card-group mt-6 grid lg:grid-cols-3 grid-cols-2 w-full gap-6 lg:gap-10">
            {links.orders.map((item) => (
              <li
                key={item.count}
                className="shadow rounded-xl text-center py-1 hover:bg-gray-100 bg-white"
              >
                <h4 className="text-3xl font-medium">
                  {deliveryStatusCount(item.text)}
                </h4>
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
