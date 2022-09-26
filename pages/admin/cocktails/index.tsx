import { AiOutlinePlus } from "react-icons/ai";
import CocktailTable from "@/components/table/CocktailTable";
import AdminLayout from "@/layout/AdminLayout";
import Button from "@/components/button";
import { GetServerSidePropsContext } from "next";

export default function AdminCocktailsPage() {
  return (
    <AdminLayout title="Cocktails">
      <section className="flex flex-col items-end">
        <Button
          text="Create Cocktail"
          href="/admin/cocktails/create-cocktail"
          icon={<AiOutlinePlus size={30} className="mr-2" />}
          className="bg-green-500 font-bold text-white px-4 py-2 rounded-md w-48 hover:opacity-80  items-center justify-center flex my-4"
        />
        <CocktailTable />
      </section>
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
