import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import PolicyForm from "@/components/form/PolicyForm";

export default function PoliciesSlugPage() {
  return (
    <AdminLayout title="Policies">
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
