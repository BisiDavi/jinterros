/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import { formatPrice } from "@/lib/formatPrice";

export default function useOrders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if (orders === null) {
      readData("/orders", orders, setOrders);
    }
  }, [orders]);

  const formattedOrders: any = orders ? formatDBData(orders) : null;

  const getDate = (dateValue: any) => {
    const date = new Date(dateValue);
    return date.toLocaleDateString();
  };

  const data: any = useMemo(() => {
    if (orders) {
      let orderDataArray: any[] = [];
      formattedOrders.map((item: any) => {
        orderDataArray.push({
          invoiceID: item.id,
          date: getDate(item.create_time),
          customer: `${item.payer.name.given_name} ${item.payer.name.surname}`,
          total: `$${formatPrice(Number(item.purchase_units[0].amount.value))}`,
          paymentStatus: item.status === "COMPLETED" ? "PAID" : "NOT PAID",
          fulfillmentStatus: "Unfulfilled",
          items: item.purchase_units[0].items[0].quantity,
        });
      });
      console.log("orderDataArray", orderDataArray);
      return orderDataArray;
    }
  }, [orders]);

  return { data, orders };
}
