import AdminLayout from "@/layout/AdminLayout";
import useAdminData from "@/hooks/useAdminData";
import AdminFormView from "@/views/AdminFormView";
import PageForm from "@/components/form/PageForm";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function Pages({ slug }: Props) {
  const parsedPage = useAdminData(`/pages/${slug}`);

  return (
    <AdminLayout title="Pages">
      <AdminFormView>
        {parsedPage ? (
          <PageForm data={parsedPage} />
        ) : (
          <SpinnerLoader loadingText="Fetching Page..." />
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
