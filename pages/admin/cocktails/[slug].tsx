/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import CocktailForm from "@/components/form/CocktailForm";
import AdminLayout from "@/layout/AdminLayout";
import AdminFormView from "@/views/AdminFormView";
import { readData } from "@/lib/firebaseConfig";
import formatAdminDBData from "@/lib/formatAdminDBData";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import type { GetServerSidePropsContext } from "next";

interface Props {
  slug: string;
}

export default function AdminCocktailsPage({ slug }: Props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      readData(`/cocktail/${slug}`, data, setData);
    }
  }, [data]);

  const parsedCocktail = data ? formatAdminDBData(JSON.stringify(data)) : null;

  console.log("data", data);

  return (
    <AdminLayout title="Cocktails">
      <AdminFormView>
        {data ? (
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
