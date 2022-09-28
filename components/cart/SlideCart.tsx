/* eslint-disable @next/next/no-img-element */
import useCart from "@/hooks/useCart";
import SlideCartItem from "./SlideCartItem";

export default function SlideCart() {
  const { slideCartHandler, cart } = useCart();
  return (
    <div className="slidecart flex fixed top-0 z-50 items-center h-screen w-full">
      <div
        className="wrapper bg-gray-800 opacity-40  cursor-pointer z-50 w-3/4 h-full"
        onClick={() => slideCartHandler(false)}
      />
      <aside className="bg-white w-1/4 z-50 h-full px-4">
        {cart && cart.length > 0 ? (
          cart.map((item) => <SlideCartItem key={item.title} item={item} />)
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
