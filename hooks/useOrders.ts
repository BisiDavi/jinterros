/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import { formatPrice, getDate } from "@/lib/formatPrice";

export default function useOrders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if (orders === null) {
      readData("/orders", orders, setOrders);
    }
  }, [orders]);

  const formattedOrders: any = orders ? formatDBData(orders) : null;

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
          createdAt: item.create_time,
        });
      });
      return orderDataArray;
    }
  }, [orders]);

  const getOrderData = (orderArray: any) => {
    if (orderArray) {
      let orderDataArray: any[] = [];
      orderArray.map((item: any) => {
        orderDataArray.push({
          invoiceID: item.id,
          date: getDate(item.create_time),
          customer: `${item.payer.name.given_name} ${item.payer.name.surname}`,
          total: `$${formatPrice(Number(item.purchase_units[0].amount.value))}`,
          paymentStatus: item.status === "COMPLETED" ? "PAID" : "NOT PAID",
          fulfillmentStatus: "Unfulfilled",
          items: item.purchase_units[0].items[0].quantity,
          createdAt: item.create_time,
        });
      });
      return orderDataArray;
    }
    return [];
  };

  const useMemoizedOrderData = (orderArray: any) =>
    useMemo(() => getOrderData(orderArray), [orderArray]);

  return { data, orders, formattedOrders, useMemoizedOrderData };
}
