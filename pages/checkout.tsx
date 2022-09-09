/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layout/DefaultLayout";

import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";

export default function Checkout() {
  return (
    <DefaultLayout title="Cart">
      <section className="chekcout my-52 flex items-start container mx-auto">
        <div className="w-3/5 shadow-lg pb-8">
          <h4 className="text-xl py-1 ml-4 pt-3 h-12">SHIPPING ADDRESS</h4>
          <hr />
          <form className="px-10">
            {checkoutForm.map((formItem, index) => {
              return (
                <div key={index} className="flex justify-between items-center">
                  {formItem.map((item, idx) => {
                    const width = formItem.length === 2 ? `w-80` : "w-full";
                    return (
                      <div key={item.name} className={`form-control ${width}`}>
                        {displayForm(item)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <Button
              className="bg-rum-brown w-full flex items-center py-2 justify-center text-white font-bold mt-4"
              text="SAVE ADDRESS"
            />
          </form>
        </div>
        <div className="w-2/5 shadow-lg ml-10">
          <h4 className="text-xl py-1 ml-4 pt-3 h-12">ORDER SUMMARY</h4>
          <hr />
          <div className="content  py-4">
            <div className="row flex items-center w-3/4 justify-between mx-auto">
              <img src="/rum-bottle-2.webp" alt="jinterros" title="jinterros" />
              <div className="text flex flex-col text-xl">
                <h6 className="text-2xl font-thin">1 Bottle of Rum</h6>
                <h4 className="text-rum-brown font-bold">$40</h4>
                <p className="text-base">
                  Qty:
                  <span className="font-bold ml-1">1</span>
                </p>
              </div>
            </div>
            <ul className="row mx-auto justify-center flex flex-col items-center">
              <li className="my-1 w-1/3 justify-between flex font-bold">
                Subtotal
                <span>$40</span>
              </li>
              <li className="my-1 w-1/3 justify-between flex font-bold">
                Delivery Fee
                <span>$10</span>
              </li>
            </ul>
            <div className="w-full border-y py-2">
              <div className=" w-1/3  mx-auto my-1 justify-between flex font-bold">
                <span>Total</span>
                <span className="text-rum-brown">$55</span>
              </div>
            </div>
            <h4 className="text-rum-brown mt-4 text-lg text-center font-bold">
              MODIFY CART
            </h4>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
