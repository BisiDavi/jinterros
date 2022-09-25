import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import PolicyForm from "@/components/form/PolicyForm";
import PolicyTable from "@/components/table/PolicyTable";

export default function PoliciesPage() {
  return (
    <AdminLayout title="Policies">
      <PolicyTable />
      <PolicyForm />
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
