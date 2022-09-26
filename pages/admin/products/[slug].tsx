import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import AdminProductForm from "@/components/form/AdminProductForm";

export default function Products() {
  return (
    <AdminLayout title="Products">
      <AdminProductForm />
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
