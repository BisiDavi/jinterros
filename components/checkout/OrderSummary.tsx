/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useCart from "@/hooks/useCart";

export default function OrderSummary() {
  const { cart, deliveryFee, getSubtotal } = useCart();

  const subtotal = getSubtotal();

  const total = subtotal + deliveryFee;

  return (
    <div className="w-full order-1 lg:order-2 lg:w-2/5 shadow-lg lg:ml-10">
      <h4 className="text-xl py-1 ml-4 pt-3 h-12">ORDER SUMMARY</h4>
      <hr />
      <div className="content py-4">
        <div className="group flex flex-col items-start">
          {cart &&
            cart.map((item) => (
              <div
                key={item.title}
                className="row flex lg:items-center border-b w-full px-4 justify-between mx-auto"
              >
                <div className="content w-full lg:w-2/3 mb-2 flex items-center justify-center mx-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    className="w-1/4 lg:w-1/5"
                  />
                  <div className="text lg:w-3/4 ml-4 flex flex-col text-xl">
                    <h6 className="text-md lg:text-2xl font-thin">
                      {item.quantity} {item.quantity > 1 ? "Bottles" : "Bottle"}{" "}
                      of Rum
                    </h6>
                    <h4 className="text-rum-brown font-bold">${item.price}</h4>
                    <p className="text-base">
                      Qty:
                      <span className="font-bold ml-1">{item.quantity}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <ul className="row mx-auto  lg:w-full justify-center flex flex-col lg:items-center">
            <li className="my-1 lg:w-1/3 justify-between flex font-bold">
              Subtotal:
              <span>${subtotal.toFixed(2)}</span>
            </li>
            <li className="my-1 lg:w-1/3 justify-between flex font-bold">
              Delivery Fee:
              <span>${deliveryFee.toFixed(2)}</span>
            </li>
          </ul>
        </div>
        <div className="w-full border-y py-2">
          <div className=" w-1/3  mx-auto my-1 justify-between flex font-bold">
            <span>Total</span>
            <span className="text-rum-brown">${total.toFixed(2)}</span>
          </div>
        </div>
        <Link href="/cart" passHref>
          <span className="text-rum-brown mt-2 hover:opacity-70 text-lg text-center flex mx-auto justify-center font-bold">
            MODIFY CART
          </span>
        </Link>
      </div>
    </div>
  );
}
