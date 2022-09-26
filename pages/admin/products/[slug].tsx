import { ref, onValue } from "firebase/database";

import AdminLayout from "@/layout/AdminLayout";
import AdminProductForm from "@/components/form/AdminProductForm";
import AdminFormView from "@/views/AdminFormView";
import { initializeDB } from "@/lib/firebaseConfig";
import formatAdminDBData from "@/lib/formatAdminDBData";
import type { GetServerSidePropsContext } from "next";

interface Props {
  product: string;
}

export default function Products({ product }: Props) {
  const productData = formatAdminDBData(product);

  return (
    <AdminLayout title="Products">
      <AdminFormView>
        <AdminProductForm data={productData} />
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
  const dataRef = ref(db, `/products/${slug}`);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    dataValue = data ? JSON.stringify(data) : null;
  });

  return {
    props: {
      product: dataValue,
    },
  };
}
