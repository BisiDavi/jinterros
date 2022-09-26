/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import DefaultLayout from "@/layout/DefaultLayout";
import shop from "@/json/shop.json";
import Button from "@/components/button";
import useCart from "@/hooks/useCart";

export default function ShopPage() {
  const { updateCartHandler } = useCart();

  const router = useRouter();

  function addToCart() {
    updateCartHandler("inc");
    router.push("/cart");
  }
  return (
    <DefaultLayout title="Shop">
      <div className="content mt-36 lg:mt-60">
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
              src="/rum-bottle.webp"
              alt="jinterros"
              title="jinterros"
              className="image-wrapper mx-auto w-1/2 h-full flex justify-center mt-40"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:text-xl font-bold">
            <h6 className="text-white lg:mb-10 lg:w-3/4 lg:mt-20 ">
              {shop.description}
            </h6>
            <ul>
              {shop.others.map((other) => (
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
              text="$40.00"
              onClick={addToCart}
              className="flex items-center bg-rum-brown w-4/5 mx-auto lg:mx-0 lg:w-2/5 font-bold hover:opacity-80 justify-center py-1 text-white text-3xl mt-20"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
