import useOrders from "@/hooks/useOrders";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import OrderStatusForm from "@/components/form/OrderStatusForm";
import AdminDetailsView from "@/views/AdminDetailsView";

interface Props {
  slug: string;
}

export default function AdminOrderView({ slug }: Props) {
  const { formattedOrders, orderGroup } = useOrders();
  const order = formattedOrders
    ? formattedOrders.filter((item: { id: string }) => item.id === slug)[0]
    : null;
  const mainOrderGroup = orderGroup?.filter((item) => item.id === slug)[0];
  return (
    <section className="container">
      {order === null ? (
        <SpinnerLoader loadingText="fetching order..." />
      ) : (
        <>
          <AdminDetailsView order={order} />
          <OrderStatusForm orderData={mainOrderGroup} />
        </>
      )}
    </section>
  );
}
