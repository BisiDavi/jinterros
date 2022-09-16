/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import useCart from "@/hooks/useCart";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Cart() {
  const { cart, updateCartHandler } = useCart();
  const amount = 40 * cart;
  return (
    <DefaultLayout title="Cart">
      <section className="cart container px-8 lg:w-4/5 mx-auto flex flex-col lg:flex-row mt-40 mb-14 lg:my-52">
        <div className="lg:w-4/5 order-2 mt-4 shadow-lg">
          <h4 className="text-sm lg:text-xl py-1 ml-4">Cart({cart})</h4>
          <hr />
          <div className="view px-4 lg:px-0 lg:w-4/5 flex lg:flex-row flex-col mx-auto my-6 items-center justify-center ">
            <div className="group-m flex items-center justify-between">
              <img
                src="/rum-bottle-2.webp"
                alt="jinterros"
                title="jinterros"
                className="w-1/4 lg:w-auto"
              />
              <div className="text-content ml-4 w-4/5 lg:w-3/5">
                <h2 className="font-bold text-xl lg:text-3xl text-orange my-2">
                  Bottle of Rum
                </h2>
                <p className="text-lg">Your order will be delivered for free</p>
                <p className="text-sm">(Within Texas, excluding large items)</p>
              </div>
            </div>
            <div className="controls w-2/5">
              <h6 className="price text-xl font-bold text-center">$40</h6>
              <div className="row flex items-center justify-between mt-3 lg:mt-6">
                <Button
                  className="bg-rum-light-brown h-6 flex text-white items-center justify-center text-4xl w-10 hover:opacity-80"
                  text="-"
                  onClick={() => updateCartHandler("dec")}
                />{" "}
                <span className="font-bold text-2xl">{cart}</span>{" "}
                <Button
                  className="bg-rum-brown h-6 flex items-center text-white justify-center text-3xl w-10 hover:opacity-80"
                  text="+"
                  onClick={() => updateCartHandler("inc")}
                />
              </div>
            </div>
          </div>
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
            <p className="lg:text-lg lg:order-2 font-bold">
              $40 * {cart} = ${amount.toFixed(2)}
            </p>
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
