/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import OrdersTable from "@/components/table/OrdersTable";
import { formatPrice } from "@/lib/formatPrice";

export default function Orders() {
  const [orders, setOrders] = useState(null);

  console.log("orders", orders);

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

  console.log("data", data);

  return (
    <AdminLayout title="Orders">
      {orders !== null && <OrdersTable data={data} />}
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
