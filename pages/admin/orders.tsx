/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import AdminLayout from "@/layout/AdminLayout";
import OrdersTable from "@/components/table/OrdersTable";
import { formatPrice } from "@/lib/formatPrice";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import type { GetServerSidePropsContext } from "next";
import useOrders from "@/hooks/useOrders";

export default function Orders() {
  const { data, orders } = useOrders();

  return (
    <AdminLayout title="Orders">
      {orders !== null ? (
        <OrdersTable data={data} />
      ) : (
        <SpinnerLoader loadingText="fetching orders..." />
      )}
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
