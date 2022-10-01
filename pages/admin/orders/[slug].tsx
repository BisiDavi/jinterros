import AdminLayout from "@/layout/AdminLayout";
import useOrders from "@/hooks/useOrders";
import AdminOrderView from "@/views/AdminOrderView";
import type { GetServerSidePropsContext } from "next";
import AdminFormView from "@/views/AdminFormView";

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
