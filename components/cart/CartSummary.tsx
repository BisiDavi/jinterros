import useCart from "@/hooks/useCart";
import Button from "@/components/button";

export default function CartSummary() {
  const { cart } = useCart();
  let total = 0;
  cart &&
    cart?.map((item) => {
      total += item.amount;
    });

  return (
    <div className="lg:w-3/5 lg:order-2  shadow-lg lg:ml-6">
      <h4 className="text-sm lg:text-xl py-1 ml-4">CART SUMMARY</h4>
      <hr />
      <div className="text flex items-center justify-between lg:my-2 p-4">
        <div className="column lg:order-1">
          <h3 className="lg:text-2xl font-bold">Subtotal</h3>
          <p className="text-xs lg:text-sm">Delivery fees not included yet.</p>
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
  );
}
