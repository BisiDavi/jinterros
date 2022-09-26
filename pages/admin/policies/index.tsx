
import AdminLayout from "@/layout/AdminLayout";
import PolicyTable from "@/components/table/PolicyTable";
import type { GetServerSidePropsContext } from "next";
import AdminTableView from "@/views/AdminTableView";

export default function PoliciesPage() {
  return (
    <AdminLayout title="Policies">
      <AdminTableView text="Create Policy" href="/admin/policies/create-policy">
        <PolicyTable />
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
