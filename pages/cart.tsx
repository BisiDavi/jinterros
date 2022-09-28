/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import CartItem from "@/components/cart/CartItem";
import useCart from "@/hooks/useCart";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Cart() {
  const { cart } = useCart();
  const cartItem = cart ? cart.length : 0;
  let total = 0;
  cart &&
    cart?.map((item) => {
      total += item.amount;
    });
  return (
    <DefaultLayout title="Cart">
      <section className="cart container px-8 lg:w-4/5 mx-auto flex flex-col lg:flex-row mt-40 mb-14 lg:my-52">
        <div className="lg:w-4/5 order-2 mt-4 shadow-lg">
          <h4 className="text-sm lg:text-xl py-1 ml-4">Cart({cartItem})</h4>
          <hr />
          {cart &&
            cart.length > 0 &&
            cart.map((item) => <CartItem key={item.title} item={item} />)}
        </div>
        <div className="lg:w-3/5 lg:order-2 shadow-lg lg:ml-6">
          <h4 className="text-sm lg:text-xl py-1 ml-4">CART SUMMARY</h4>
          <hr />
          <div className="text flex items-center justify-between lg:my-20 p-4">
            <div className="column lg:order-1">
              <h3 className="lg:text-2xl font-bold">Subtotal</h3>
              <p className="text-xs lg:text-sm">
                Delivery fees not included yet.
              </p>
            </div>
            <div className="right lg:order-2">
              <ul className="lg:text-lg font-bold">
                {cart?.map((item) => (
                  <li key={item.title}>${item.amount.toFixed(2)}</li>
                ))}
              </ul>
              {cart && cart.length > 1 && (
                <>
                  <hr />
                  <span className="font-bold text-lg">${total.toFixed(2)}</span>
                </>
              )}
            </div>
          </div>
          <hr />

          <Button
            text="CHECKOUT"
            className="bg-rum-brown hidden lg:flex w-3/4 mx-auto my-10  flex items-center justify-center font-bold hover:opacity-80 h-10 text-white"
            href="/checkout"
          />
        </div>
        <Button
          text="CHECKOUT"
          className="bg-rum-brown order-3  lg:hidden w-3/4 mx-auto my-10  flex items-center justify-center font-bold hover:opacity-80 h-10 text-white"
          href="/checkout"
        />
      </section>
    </DefaultLayout>
  );
}
