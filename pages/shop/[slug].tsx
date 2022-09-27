/* eslint-disable @next/next/no-img-element */
import { ref, get, child } from "firebase/database";

import DefaultLayout from "@/layout/DefaultLayout";
import { initializeDB } from "@/lib/firebaseConfig";
import { formatDBDataSlug, formatDBData } from "@/lib/formatDBData";
import { productType } from "@/types";
import OtherProduct from "@/components/product/OtherProduct";
import ProductBanner from "@/components/product/ProductBanner";
import type { GetStaticPropsContext } from "next";

interface Props {
  product: string;
  products: string;
}

export default function ShopPage({ product, products }: Props) {
  const parsedProduct: any = formatDBDataSlug(product);

  const parsedProducts: productType = JSON.parse(products);
  const productsArray: any = formatDBData(parsedProducts);

  const otherProducts = productsArray.filter(
    (item: productType) => item.title !== parsedProduct.title
  );

  return (
    <DefaultLayout title="Shop">
      <ProductBanner product={parsedProduct} />
      <OtherProduct otherProducts={otherProducts} />
    </DefaultLayout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug }: any = context.params;
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(child(dataRef, `/products/${slug}`));
  const productsResponse = await get(child(dataRef, "/products"));
  return {
    props: {
      product: JSON.stringify(dbResponse.val()),
      products: JSON.stringify(productsResponse.val()),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const db = initializeDB();
  const dataRef = ref(db);
  const dbResponse = await get(child(dataRef, `/products`));

  const dbArray = dbResponse.val();
  const dbkeys = Object.keys(dbArray);
  const paths = dbkeys.map((item) => ({ params: { slug: item } }));

  return { paths, fallback: "blocking" };
}
