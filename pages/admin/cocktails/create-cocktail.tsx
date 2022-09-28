import AdminFormView from "@/views/AdminFormView";
import CocktailForm from "@/components/form/CocktailForm";
import AdminLayout from "@/layout/AdminLayout";
import { GetServerSidePropsContext } from "next";

export default function AdminCocktailsPage() {
  return (
    <AdminLayout title="Cocktails">
      <AdminFormView>
      <CocktailForm />
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
