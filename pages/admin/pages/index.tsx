import AdminLayout from "@/layout/AdminLayout";
import AdminTableView from "@/views/AdminTableView";
import PageTable from "@/components/table/PageTable";
import type { GetServerSidePropsContext } from "next";

export default function Pages() {
  return (
    <AdminLayout title="Pages">
      <AdminTableView text="Create Page" href="/admin/pages/create-page">
        <PageTable />
      </AdminTableView>
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
