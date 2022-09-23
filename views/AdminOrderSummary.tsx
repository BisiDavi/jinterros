import Link from "next/link";
import links from "@/json/links.json";

export default function AdminOrderSummary() {
  return (
    <div className="shadow rounded-xl flex flex-col items-start bg-white py-6 mt-10 pb-16">
      <div className="top h-16 justify-between flex items-center border-b w-full mb-4 px-8">
        <h4 className="text-2xl">Order Summary</h4>
      </div>
      <div className="content w-full px-8">
        <ul className="flex items-center justify-between rounded-xl orange-light mt-2 p-4 w-2/5 hover:opacity-80">
          <li className="rounded-xl text-white font-bold bg-orange w-12 justify-center text-xl h-10 flex items-center">
            25
          </li>
          <li className="text-lg">Lastest Orders</li>
          <li>
            <Link href="/admin/orders">
              <a className="underline text-gray-500 hover:text-blue-500 text-sm">
                Manage Orders
              </a>
            </Link>
          </li>
        </ul>
        <ul className="card-group mt-6 grid grid-cols-3 w-2/5 gap-10">
          {links.orders.map((item) => (
            <li
              key={item.count}
              className="shadow rounded-xl text-center py-3 hover:bg-gray-100 bg-white"
            >
              <h4 className="text-3xl font-medium">{item.count}</h4>
              <p className="text-md my-1">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
