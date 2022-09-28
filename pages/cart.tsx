import Button from "@/components/button";
import CartItemList from "@/components/cart/CartItemList";
import CartSummary from "@/components/cart/CartSummary";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Cart() {
  return (
    <DefaultLayout title="Cart">
      <section className="cart container lg:items-start px-8 lg:w-4/5 mx-auto flex flex-col lg:flex-row mt-40 mb-14 lg:my-52">
        <CartItemList />
        <CartSummary />
        <Button
          text="CHECKOUT"
          className="bg-rum-brown order-3  lg:hidden w-3/4 mx-auto my-10  flex items-center justify-center font-bold hover:opacity-80 h-10 text-white"
          href="/checkout"
        />
      </section>
    </DefaultLayout>
  );
}
