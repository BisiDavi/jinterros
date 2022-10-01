import useAuth from "@/hooks/useAuth";
import useOrders from "@/hooks/useOrders";

export default function useMyOrders() {
  const { authDetails } = useAuth();
  const user = authDetails();
  const { formattedOrders, useMemoizedOrderData } = useOrders();

  const userOrder =
    formattedOrders && user
      ? formattedOrders.filter(
          (item: any) =>
            item.purchase_units[0].shipping.name.full_name === user?.displayName
        )
      : null;

  const orderData = useMemoizedOrderData(userOrder);

  return { orderData };
}
