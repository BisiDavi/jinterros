import PageForm from "@/components/form/PageForm";
import AdminLayout from "@/layout/AdminLayout";
import type { GetServerSidePropsContext } from "next";

export default function Pages() {
  return (
    <AdminLayout title="Pages">
      <PageForm />
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
