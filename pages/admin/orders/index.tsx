import AdminLayout from "@/layout/AdminLayout";
import OrdersTable from "@/components/table/OrdersTable";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import useOrders from "@/hooks/useOrders";
import type { GetServerSidePropsContext } from "next";

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
