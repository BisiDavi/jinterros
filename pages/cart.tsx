/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Cart() {
  return (
    <DefaultLayout title="Cart">
      <section className="cart container w-4/5 mx-auto flex my-52">
        <div className="w-4/5 shadow-lg">
          <h4 className="text-xl py-1 ml-4">Cart(1)</h4>
          <hr />
          <div className="view  w-4/5 flex mx-auto my-6 items-center justify-center ">
            <img src="/rum-bottle-2.webp" alt="jinterros" title="jinterros" />
            <div className="text-content w-3/5">
              <h2 className="font-bold text-3xl text-orange my-2">
                Bottle of Rum
              </h2>
              <p className="w">Your order will be delivered for free</p>
              <p className="">(Within Texas, excluding large items)</p>
            </div>
            <div className="controls w-2/5">
              <h6 className="price text-xl font-bold text-center">$40</h6>
              <div className="row flex items-center justify-between mt-6">
                <Button
                  className="bg-rum-light-brown h-6 flex text-white items-center justify-center text-4xl w-10 hover:opacity-80"
                  text="-"
                />{" "}
                <span className="font-bold text-2xl">1</span>{" "}
                <Button
                  className="bg-rum-brown h-6 flex items-center text-white justify-center text-3xl w-10 hover:opacity-80"
                  text="+"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 shadow-lg ml-6">
          <h4 className="text-xl py-1 ml-4">CART SUMMARY</h4>
          <hr />
          <div className="text flex items-center justify-between items-start my-20 px-4">
            <div className="column">
              <h3 className="text-2xl font-bold">Subtotal</h3>
              <p className="text-sm">Delivery fees not included yet.</p>
            </div>
            <p className="text-xl font-bold">$40</p>
          </div>
          <hr />

          <Button
            text="CHECKOUT"
            className="bg-rum-brown w-3/4 mx-auto my-10  flex items-center justify-center font-bold hover:opacity-80 h-10 text-white"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
