/* eslint-disable @next/next/no-img-element */
import { GiCancel } from "react-icons/gi";

import useCart from "@/hooks/useCart";
import Button from "@/components/button";

export default function SlideCart() {
  const { slideCartHandler, cart, updateCartHandler, removeCartItemHandler } =
    useCart();
  return (
    <div className="slidecart flex fixed top-0 z-50 items-center h-screen w-full">
      <div
        className="wrapper bg-gray-800 opacity-40  cursor-pointer z-50 w-3/4 h-full"
        onClick={() => slideCartHandler(false)}
      />
      <aside className="bg-white w-1/4 z-50 h-full px-4">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div
              className="cart-list my-4 border-b flex flex-col py-4 relative"
              key={item.title}
            >
              <div className="top flex items-center w-full justify-between">
                <img src={item.img} alt={item.title} className="w-1/3 mr-6 h-52" />
                <div className="text w-3/4">
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="text-xl">
                    ${item.price} X {item.quantity} = ${item.amount.toFixed(2)}
                  </p>
                  <div className="row flex w-3/4 items-center justify-between mt-3 ">
                    <Button
                      className="bg-red-500 h-6 flex text-white items-center justify-center text-4xl w-10 hover:opacity-80"
                      text="-"
                      onClick={() => updateCartHandler(item.title, "dec")}
                    />{" "}
                    <span className="font-bold text-2xl">{item.quantity}</span>{" "}
                    <Button
                      className="bg-green-500 h-6 flex items-center text-white justify-center text-3xl w-10 hover:opacity-80"
                      text="+"
                      onClick={() => updateCartHandler(item.title, "inc")}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="rounded-full bg-dark absolute hover:text-red-500 right-0 top-0"
                icon={<GiCancel size={30} />}
                onClick={() => removeCartItemHandler(item.title)}
              />
            </div>
          ))
        ) : (
          <div className="no-item flex mx-auto flex-col  justify-center">
            <img src="/error-img.gif" alt="error" />
            <h6 className="text-center font-bold text-2xl">
              Oops, Cart is presently empty
            </h6>
          </div>
        )}
      </aside>
    </div>
  );
}
