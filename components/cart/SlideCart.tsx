/* eslint-disable @next/next/no-img-element */
import useCart from "@/hooks/useCart";
import Button from "@/components/button";

export default function SlideCart() {
  const { closeSlideCart, cart, updateCartHandler } = useCart();
  return (
    <div className="slidecart flex items-center h-screen w-full">
      <div
        className="wrapper bg-gray-300 w-3/5 h-full"
        onClick={closeSlideCart}
      />
      <aside className="bg-white w-2/5 h-full">
        {cart?.map((item) => (
          <div
            className="cart-list my-4 border-b flex flex-col"
            key={item.title}
          >
            <div className="top flex items-center">
              <img src={item.img} alt={item.title} />
              <div className="text">
                {item.price} X {item.quantity} = {item.amount}
              </div>
            </div>
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
        ))}
      </aside>
    </div>
  );
}
