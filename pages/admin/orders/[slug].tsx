import AdminLayout from "@/layout/AdminLayout";
import AdminOrderView from "@/views/AdminOrderView";
import AdminFormView from "@/views/AdminFormView";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function OrdersSlugPage({ slug }: Props) {
  return (
    <AdminLayout title="Orders Details">
      <AdminFormView>
        <AdminOrderView slug={slug} />
      </AdminFormView>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { slug } = context.query;

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug,
    },
  };
}
