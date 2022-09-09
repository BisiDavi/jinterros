/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Thanks4OrderPage() {
  return (
    <DefaultLayout title="Thanks for your order">
      <section className="my-52">
        <div className="w-1/4 mx-auto">
          <img
            src="/successIcon.webp"
            alt="successfull"
            height="200px"
            width="200px"
            className="mx-auto"
            title="Thanks for placing an order"
          />
          <p className="text-xl text-center">Thanks for placing an order</p>
          <Button
            text="Track Order"
            className="bg-dark-brown text-white mx-auto hover:opacity-80 px-8 py-4 flex justify-center w-full  my-6 font-bold"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
