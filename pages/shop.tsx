/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
      <div className="content mt-60">
        <h4 className="text-center text-xl font-bold my-4">
          “A party is best enjoyed with a circle of friends and a bottle of
          rum.”
        </h4>
        <div className="shop-view bg-orange flex p-20 h-800 mb-40 shop-background-image w-screen">
          <div className="w-1/2 relative">
            <div className="image-wrapper mx-auto flex justify-center mt0">
              <Image
                src="/rum-bottle.webp"
                alt="jinterros"
                title="jinterros"
                height={800}
                width={300}
              />
            </div>
          </div>
          <div className="w-1/2 text-xl font-bold">
            <h6 className="text-white mb-10 w-3/4 mt-20 ">
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
              className="flex items-center bg-rum-brown w-2/5 font-bold hover:opacity-80 justify-center py-1 text-white text-3xl mt-20"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
