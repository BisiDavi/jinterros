/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import useCart from "@/hooks/useCart";
import { cartType } from "@/types/redux-types";

interface Props {
  item: cartType;
}

export default function CartItem({ item }: Props) {
  const { updateCartHandler } = useCart();

  return (
    <div className="view px-2 border-b pb-2 lg:px-0 lg:w-11/12 flex lg:flex-row flex-col mx-auto my-6 items-center justify-center ">
      <div className="group-m flex items-center justify-between">
        <img
          src={item.img}
          alt="jinterros"
          title={item.title}
          className="h-40"
        />
        <div className="text-content w-3/6 lg:w-4/6">
          <h2 className="font-bold text-xl lg:text-xl text-orange my-2">
            {item.title}
          </h2>
          <p className="text-md">Your order will be delivered for free</p>
          <p className="text-xs">(Within Texas, excluding large items)</p>
        </div>
      </div>
      <div className="controls w-2/6">
        <h6 className="price text-xl font-bold text-center">
          ${item.price} X {item.quantity} = ${item.amount.toFixed(2)}
        </h6>
        <div className="row flex items-center justify-between mt-3 lg:mt-6">
          <Button
            className="bg-rum-light-brown h-6 flex text-white items-center justify-center text-4xl w-10 hover:opacity-80"
            text="-"
            onClick={() => updateCartHandler(item.title, "dec")}
          />{" "}
          <span className="font-bold text-2xl">{item.quantity}</span>{" "}
          <Button
            className="bg-rum-brown h-6 flex items-center text-white justify-center text-3xl w-10 hover:opacity-80"
            text="+"
            onClick={() => updateCartHandler(item.title, "inc")}
          />
        </div>
      </div>
    </div>
  );
}
