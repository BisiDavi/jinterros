import useOrders from "@/hooks/useOrders";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import OrderStatusForm from "@/components/form/OrderStatusForm";
import AdminDetailsView from "@/views/AdminDetailsView";
import { formatDeliveryStatus, formatOrderObject } from "@/lib/formatOrders";

interface Props {
  slug: string;
}

export default function AdminOrderView({ slug }: Props) {
  const { formattedOrders, orders } = useOrders();
  const orderGroup = formatOrderObject(orders);
  const order = formattedOrders
    ? formattedOrders.filter((item: { id: string }) => item.id === slug)[0]
    : null;
  const mainOrderGroup = orderGroup?.filter((item) => item.id === slug)[0];
  const deliveryStatus = formatDeliveryStatus(mainOrderGroup.deliveryStatus);
  return (
    <section className="container">
      {order === null ? (
        <SpinnerLoader loadingText="fetching order..." />
      ) : (
        <>
          <h4 >
            Delivery Status:
            <span className={`${deliveryStatus} ml-1 font-bold`}>{deliveryStatus}</span>
          </h4>
          {formattedOrders && <AdminDetailsView order={order} />}
          <OrderStatusForm orderData={mainOrderGroup} />
        </>
      )}
    </section>
  );
}
