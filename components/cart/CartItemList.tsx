import CartItem from "@/components/cart/CartItem";
import useCart from "@/hooks/useCart";

export default function CartItemList() {
  const { cart } = useCart();
  const cartItem = cart ? cart.length : 0;

  return (
    <div className="lg:w-4/5 order-2 mt-4 shadow-lg">
      <h4 className="text-sm lg:text-xl py-1 ml-4">Cart({cartItem})</h4>
      <hr />
      {cart &&
        cart.length > 0 &&
        cart.map((item) => <CartItem key={item.title} item={item} />)}
    </div>
  );
}
