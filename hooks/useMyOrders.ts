/* eslint-disable react-hooks/exhaustive-deps */
import useAuth from "@/hooks/useAuth";
import useOrders from "@/hooks/useOrders";
import { useEffect } from "react";
import dropdown from "@/json/dropdown.json";

export default function useMyOrders() {
  const { authDetails } = useAuth();
  const user = authDetails();
  const { formattedOrders, useMemoizedOrderData } = useOrders();
  const dropdowndata: any = dropdown.header;

  const userOrder =
    formattedOrders && user
      ? formattedOrders.filter(
          (item: any) =>
            item.purchase_units[0].shipping.name.full_name === user?.displayName
        )
      : null;

  useEffect(() => {
    if (userOrder !== null && userOrder.length > 0) {
      dropdowndata[1] = { link: "/order-progress", text: "Track Orders" };
    } else if (userOrder !== null && userOrder.length === 0) {
      dropdowndata[1] = null;
    }
  }, [userOrder]);

  const orderData = useMemoizedOrderData(userOrder);

  return { orderData, dropdowndata };
}
