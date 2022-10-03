import AdminLayout from "@/layout/AdminLayout";
import OrdersTable from "@/components/table/OrdersTable";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import useOrders from "@/hooks/useOrders";
import type { GetServerSidePropsContext } from "next";
import { sortDataByDate } from "@/lib/formatDBData";

export default function Orders() {
  const { data, orders } = useOrders();
  const tempData = data ? sortDataByDate(data) : null;

  console.log("tempData", tempData);

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
