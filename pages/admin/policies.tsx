import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";

export default function PoliciesPage() {
  return <AdminLayout title="Policies"></AdminLayout>;
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