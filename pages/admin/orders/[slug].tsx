import AdminLayout from "@/layout/AdminLayout";
import useOrders from "@/hooks/useOrders";
import AdminOrderView from "@/views/AdminOrderView";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function OrdersSlugPage({ slug }: Props) {
  const { formattedOrders } = useOrders();
  const order = formattedOrders
    ? formattedOrders.filter((item: { id: string }) => item.id === slug)[0]
    : null;

  console.log("order", order);

  return (
    <AdminLayout title="Orders Details">
      <AdminOrderView slug={slug} />
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
