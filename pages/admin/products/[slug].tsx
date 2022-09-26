import AdminLayout from "@/layout/AdminLayout";
import AdminProductForm from "@/components/form/AdminProductForm";
import AdminFormView from "@/views/AdminFormView";
import useAdminData from "@/hooks/useAdminData";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function Products({ slug }: Props) {
  const parsedProduct = useAdminData(`/products/${slug}`);

  return (
    <AdminLayout title="Products">
      <AdminFormView>
        {parsedProduct ? (
          <AdminProductForm data={parsedProduct} />
        ) : (
          <SpinnerLoader loadingText="Fetching Product..." />
        )}
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
