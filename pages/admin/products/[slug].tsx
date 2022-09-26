import type { GetServerSidePropsContext } from "next";
import AdminLayout from "@/layout/AdminLayout";
import AdminProductForm from "@/components/form/AdminProductForm";
import AdminFormView from "@/views/AdminFormView";

export default function Products() {
  return (
    <AdminLayout title="Products">
      <AdminFormView>
        <AdminProductForm />
      </AdminFormView>
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
