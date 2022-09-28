/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import useCart from "@/hooks/useCart";
import Button from "@/components/button";
import SlideCartItem from "@/components/cart/SlideCartItem";

export default function SlideCart() {
  const { slideCartHandler, cart, getSubtotal } = useCart();
  const router = useRouter();

  function onClickHandler(route: string) {
    slideCartHandler(false);
    router.push(route);
  }

  const subtotal = getSubtotal();

  return (
    <div className="slidecart flex fixed top-0 z-50 items-center h-screen w-full">
      <div
        className="wrapper bg-gray-800 opacity-40  cursor-pointer z-50 w-3/4 h-full"
        onClick={() => slideCartHandler(false)}
      />
      <aside className="bg-white w-1/4 z-50 h-full px-4">
        {cart && cart.length > 0 ? (
          <div className="cart-view flex flex-col h-full">
            <div className="cart-list overflow-y-scroll h-5/6">
              {cart.map((item) => (
                <SlideCartItem key={item.title} item={item} />
              ))}
            </div>
            <div className="button-group flex-col flex items-center justify-between">
              <div className="amount bg-gray-100 p-2  flex mb-2 font-bold text-xl items-center justify-between w-full">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="group flex items-center h-1/6 justify-between w-full">
                <Button
                  text="View Cart"
                  className="bg-orange font-bold text-white px-3 py-1 hover:opacity-70"
                  onClick={() => onClickHandler("/cart")}
                />
                <Button
                  text="Checkout"
                  className="bg-rum-brown font-bold text-white px-3 py-1 hover:opacity-70"
                  onClick={() => onClickHandler("/checkout")}
                />
              </div>
            </div>
          </div>
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
