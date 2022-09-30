import { useState, useEffect } from "react";

import AdminLayout from "@/layout/AdminLayout";
import AdminOrderSummary from "@/views/AdminOrderSummary";
import InfoCardGroupView from "@/views/InfoCardGroupView";
import type { GetServerSidePropsContext } from "next";
import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";

export default function Admin() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if (orders === null) {
      readData("/orders", orders, setOrders);
    }
  }, [orders]);

  const formattedOrders = formatDBData(orders);
  console.log("formattedOrders", formattedOrders);


  return (
    <AdminLayout title="Dashboard">
      <InfoCardGroupView />
      <AdminOrderSummary />
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  console.log("req.cookies", req.cookies);

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
