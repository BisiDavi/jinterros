import PageForm from "@/components/form/PageForm";
import AdminLayout from "@/layout/AdminLayout";
import AdminFormView from "@/views/AdminFormView";
import type { GetServerSidePropsContext } from "next";

export default function Pages() {
  return (
    <AdminLayout title="Pages">
      <AdminFormView>
        <PageForm />
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
