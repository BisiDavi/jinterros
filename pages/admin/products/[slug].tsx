import { ref, onValue } from "firebase/database";

import AdminLayout from "@/layout/AdminLayout";
import AdminProductForm from "@/components/form/AdminProductForm";
import AdminFormView from "@/views/AdminFormView";
import type { GetServerSidePropsContext } from "next";
import { initializeDB } from "@/lib/firebaseConfig";

interface Props {
  products: string;
}

export default function Products({ products }: Props) {
  const parsedProduct = JSON.parse(products);
  const productArray: any = Object.values(parsedProduct);
  const productData = JSON.parse(productArray[0]);

  console.log("productData", productData);

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

  console.log("slug", slug);

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

  console.log("dataValue", dataValue);

  return {
    props: {
      products: dataValue,
    },
  };
}
