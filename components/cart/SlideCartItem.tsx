/* eslint-disable @next/next/no-img-element */
import { GiCancel } from "react-icons/gi";

import Button from "@/components/button";
import useCart from "@/hooks/useCart";
import { cartType } from "@/types/redux-types";

interface Props {
  item: cartType;
}

export default function SlideCartItem({ item }: Props) {
  const { updateCartHandler, removeCartItemHandler } = useCart();
  return (
    <div className="cart-list my-4 border-b flex flex-col py-4 relative">
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
  );
}
