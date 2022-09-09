/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useCart from "@/hooks/useCart";

export default function OrderSummary() {
  const { cart } = useCart();
  const amount = 40 * cart;
  const total = amount + 10;

  const cartText = cart > 1 ? "Bottles" : "Bottle";

  return (
    <div className="w-2/5 shadow-lg ml-10">
      <h4 className="text-xl py-1 ml-4 pt-3 h-12">ORDER SUMMARY</h4>
      <hr />
      <div className="content  py-4">
        <div className="row flex items-center w-3/4 justify-between mx-auto">
          <img src="/rum-bottle-2.webp" alt="jinterros" title="jinterros" />
          <div className="text flex flex-col text-xl">
            <h6 className="text-2xl font-thin">
              {cart} {cartText} of Rum
            </h6>
            <h4 className="text-rum-brown font-bold">$40</h4>
            <p className="text-base">
              Qty:
              <span className="font-bold ml-1">{cart}</span>
            </p>
          </div>
        </div>
        <ul className="row mx-auto justify-center flex flex-col items-center">
          <li className="my-1 w-1/3 justify-between flex font-bold">
            Subtotal
            <span>${amount.toFixed(2)}</span>
          </li>
          <li className="my-1 w-1/3 justify-between flex font-bold">
            Delivery Fee
            <span>$10.00</span>
          </li>
        </ul>
        <div className="w-full border-y py-2">
          <div className=" w-1/3  mx-auto my-1 justify-between flex font-bold">
            <span>Total</span>
            <span className="text-rum-brown">${total.toFixed(2)}</span>
          </div>
        </div>
        <Link href="/cart" passHref>
          <a className="text-rum-brown mt-2 hover:opacity-70 text-lg text-center flex mx-auto justify-center font-bold">
            MODIFY CART
          </a>
        </Link>
      </div>
    </div>
  );
}
