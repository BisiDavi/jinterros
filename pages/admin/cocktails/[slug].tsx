import CocktailForm from "@/components/form/CocktailForm";
import AdminLayout from "@/layout/AdminLayout";
import AdminFormView from "@/views/AdminFormView";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import useAdminData from "@/hooks/useAdminData";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function AdminCocktailsPage({ slug }: Props) {
  const parsedCocktail = useAdminData(`/cocktail/${slug}`);

  return (
    <AdminLayout title="Cocktails">
      <AdminFormView>
        {parsedCocktail ? (
          <CocktailForm data={parsedCocktail} />
        ) : (
          <SpinnerLoader loadingText="Fetching Cocktail..." />
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
