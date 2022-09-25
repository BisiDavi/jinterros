import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import PolicyTable from "@/components/table/PolicyTable";

export default function PoliciesPage() {
  return (
    <AdminLayout title="Policies">
      <PolicyTable />
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
