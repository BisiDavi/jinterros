/* eslint-disable @next/next/no-img-element */
import { ref, get, child } from "firebase/database";
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/DefaultLayout";
import { initializeDB } from "@/lib/firebaseConfig";
import Button from "@/components/button";
import useCart from "@/hooks/useCart";
import { formatDBData } from "@/lib/formatDBData";
import { productType } from "@/types";

interface Props {
  products: string;
}

export default function ShopPage({ products }: Props) {
  const parsedProduct = JSON.parse(products);
  const productsArray: any = formatDBData(parsedProduct);
  const router = useRouter();

  const { updateCartHandler } = useCart();

  const mainProduct: productType = productsArray.filter(
    (item: { title: string }) => item.title === "Jinterros Rum"
  )[0];

  const otherProducts = productsArray.filter(
    (item: { title: string }) => item.title !== "Jinterros Rum"
  );

  const productDescriptonList = [
    { text: "Price ($):", value: mainProduct.price },
    { text: "Size (ML):", value: mainProduct.size },
    { text: "Alcohol (%):", value: mainProduct.alcoholVolume },
    { text: "Country:", value: mainProduct.country },
    { text: "Type:", value: mainProduct.type },
  ];

  function addToCart() {
    updateCartHandler("inc");
    router.push("/cart");
  }
  return (
    <DefaultLayout title="Shop">
      <section className="content mt-36 lg:mt-60">
        <h4 className="text-center text-xl font-bold my-4">
          “A party is best enjoyed with a circle of friends and a bottle of
          rum.”
        </h4>
        <img
          src="/rum-bottle.webp"
          alt="jinterros"
          title="jinterros"
          className="image-wrapper -mb-4 lg:hidden mx-auto w-2/5 lg:w-auto justify-center mt0"
        />
        <div className="shop-view bg-orange flex flex-col lg:flex-row px-8 py-32  lg:p-20 lg-h-800  mb-40 shop-background-image w-screen">
          <div className="w-full hidden h-full lg:flex lg:w-1/2 relative">
            <img
              src={mainProduct.productImage}
              alt={mainProduct.title}
              title={mainProduct.title}
              className="image-wrapper mx-auto w-1/3 h-full flex justify-center mt-40"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:text-xl font-bold">
            <h6 className="text-white lg:mb-10 lg:w-3/4 lg:mt-20 ">
              {mainProduct.description}
            </h6>
            <ul>
              {productDescriptonList.map((other) => (
                <li key={other.value} className="text-white my-2">
                  <span className="mr-1">{other.text}</span>
                  {other.value}
                </li>
              ))}
            </ul>
            <Button
              icon={
                <img src="/cartIcon.webp" alt="cart-icon" className="mr-6" />
              }
              text={`$${mainProduct.price.toFixed(2)}`}
              onClick={addToCart}
              className="flex items-center bg-rum-brown w-4/5 mx-auto lg:mx-0 lg:w-2/5 font-bold hover:opacity-80 justify-center py-1 text-white text-3xl mt-20"
            />
          </div>
        </div>
      </section>
      {otherProducts.length > 0 && (
        <section className="container mx-auto">
          <h4 className="text-center text-xl font-bold my-4">
            Other Available Products
            <ul className="grid grid-cols-4 gap-4 product-grid">
              {otherProducts.map((item: productType) => (
                <li key={item.title} className="border p-4 rounded shadow h-96">
                  <img
                    src={item.productImage}
                    alt={item.title}
                    className="h-90 mx-auto"
                  />
                  <h6>{item.title}</h6>
                </li>
              ))}
            </ul>
          </h4>
        </section>
      )}
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
