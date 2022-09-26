import { ref, onValue } from "firebase/database";

import CocktailForm from "@/components/form/CocktailForm";
import AdminLayout from "@/layout/AdminLayout";
import AdminFormView from "@/views/AdminFormView";
import { initializeDB } from "@/lib/firebaseConfig";
import formatAdminDBData from "@/lib/formatAdminDBData";
import type { GetServerSidePropsContext } from "next";

interface Props {
  cocktail: string;
}

export default function AdminCocktailsPage({ cocktail }: Props) {
  const parsedCocktail = formatAdminDBData(cocktail);

  return (
    <AdminLayout title="Cocktails">
      <AdminFormView>
        <CocktailForm data={parsedCocktail} />
      </AdminFormView>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { slug } = context.query;

  let dataValue;

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }

  const db = initializeDB();
  const dataRef = ref(db, `/cocktail/${slug}`);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    dataValue = data ? JSON.stringify(data) : null;
  });

  console.log("dataValue", dataValue);

  return {
    props: {
      cocktail: dataValue,
    },
  };
}
