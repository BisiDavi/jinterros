import CocktailTable from "@/components/table/CocktailTable";
import AdminLayout from "@/layout/AdminLayout";
import { GetServerSidePropsContext } from "next";
import AdminTableView from "@/views/AdminTableView";

export default function AdminCocktailsPage() {
  return (
    <AdminLayout title="Cocktails">
      <AdminTableView
        text="Create Cocktail"
        href="/admin/cocktails/create-cocktail"
      >
        <CocktailTable />
      </AdminTableView>
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
