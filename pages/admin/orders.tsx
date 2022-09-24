import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import OrdersTable from "@/components/table/OrdersTable";

export default function Orders() {
  return (
    <AdminLayout title="Orders">
      <OrdersTable />
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
