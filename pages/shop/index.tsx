/* eslint-disable @next/next/no-img-element */
import { ref, get, child } from "firebase/database";

import DefaultLayout from "@/layout/DefaultLayout";
import { initializeDB } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import OtherProduct from "@/components/product/OtherProduct";
import ProductBanner from "@/components/product/ProductBanner";
import type { productType } from "@/types";

interface Props {
  products: string;
}

export default function ShopPage({ products }: Props) {
  const parsedProduct = JSON.parse(products);
  const productsArray: any = formatDBData(parsedProduct);

  const mainProduct: productType = productsArray.filter(
    (item: { title: string }) => item.title === "Jinterros Rum"
  )[0];

  const otherProducts = productsArray.filter(
    (item: { title: string }) => item.title !== "Jinterros Rum"
  );
  return (
    <DefaultLayout title="Shop">
      <ProductBanner product={mainProduct} />
      <OtherProduct otherProducts={otherProducts} />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, `/products`));
  return {
    props: {
      products: JSON.stringify(dbResponse.val()),
    },
    revalidate: 10,
  };
}
