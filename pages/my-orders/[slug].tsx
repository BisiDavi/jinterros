import AdminOrderView from "@/views/AdminOrderView";
import DefaultLayout from "@/layout/DefaultLayout";
import type { GetServerSidePropsContext } from "next";
import AdminFormView from "@/views/AdminFormView";

interface Props {
  slug: string;
}

export default function OrdersSlugPage({ slug }: Props) {
  return (
    <DefaultLayout title="Your Orders Details">
      <div className="container mx-auto mt-52 mb-10">
        <AdminFormView>
          <AdminOrderView slug={slug} />
        </AdminFormView>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;

  return {
    props: {
      slug,
    },
  };
}
