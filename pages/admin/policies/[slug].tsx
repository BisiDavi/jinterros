import AdminLayout from "@/layout/AdminLayout";
import PolicyForm from "@/components/form/PolicyForm";
import AdminFormView from "@/views/AdminFormView";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import useAdminData from "@/hooks/useAdminData";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function PoliciesSlugPage({ slug }: Props) {
  const parsedPolicy = useAdminData(`/policy/${slug}`);

  return (
    <AdminLayout title="Policies">
      <AdminFormView>
        {parsedPolicy ? (
          <PolicyForm data={parsedPolicy} />
        ) : (
          <SpinnerLoader loadingText="Fetching Policy..." />
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
