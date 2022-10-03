import InfoCard from "@/components/card/InfoCard";
import useOrders from "@/hooks/useOrders";
import links from "@/json/links.json";

export default function InfoCardGroupView() {
  const {formattedOrders,orders} = useOrders()
  return (
    <div className="top grid lg:grid-cols-3 items-center gap-x-14 lg:w-4/5">
      {links.dashboard.map((item) => (
        <InfoCard
          title={item.title}
          text={item.text}
          key={item.title}
          orders={formattedOrders}
          orderArray={orders}
        />
      ))}
    </div>
  );
}
