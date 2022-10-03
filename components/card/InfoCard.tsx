import displayIcons from "@/lib/displayIcons";
import { getCustomers } from "@/lib/formatOrders";
import { getTotalRevenue } from "@/lib/formatPrice";

interface Props {
  title: string | number;
  text: string;
  orders: any[];
  orderArray: any;
}

export default function InfoCard({ title, text, orders, orderArray }: Props) {
  const customer = getCustomers(orderArray);
  const orderValue = orders?.length;
  const textValue =
    text.includes("TOTAL ORDER") && orders?.length === 1 ? "TOTAL ORDER" : text;
  const revenue = orders ? getTotalRevenue(orders) : 0;
  const titleText = text.includes("REVENUE")
    ? revenue
    : text.includes("ORDER")
    ? orderValue
    : text.includes("CUSTOMERS")
    ? customer?.length
    : title;

  console.log("customer", customer);
  return (
    <div className="shadow border rounded-lg h-28 flex my-2 lg:my-0 items-center bg-white hover:bg-gray-100">
      <div className="icon bg-orange h-16 w-16 p-2 rounded-full flex items-center justify-center mx-4">
        {displayIcons(text)}
      </div>
      <div className="text">
        <h3 className="text-3xl">{titleText}</h3>
        <p className="text-base mt-1">{textValue}</p>
      </div>
    </div>
  );
}
