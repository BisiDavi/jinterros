import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateCart } from "@/redux/cart-slice";

export default function useCart() {
  const { cart, deliveryFee } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function updateCartHandler(type: "inc" | "dec") {
    dispatch(updateCart(type));
  }

  const amount = 40 * cart;

  const total = amount + deliveryFee;

  return {
    cart,
    updateCartHandler,
    amount,
    deliveryFee,
    total,
  };
}
