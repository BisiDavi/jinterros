import AdminLayout from "@/layout/AdminLayout";
import AdminOrderSummary from "@/views/AdminOrderSummary";
import InfoCardGroupView from "@/views/InfoCardGroupView";
import type { GetServerSidePropsContext } from "next";

export default function Admin() {
  
  return (
    <AdminLayout title="Dashboard">
      <InfoCardGroupView />
      <AdminOrderSummary />
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
