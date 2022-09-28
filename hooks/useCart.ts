import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  addToCart,
  removeCartItem,
  updateCartQuantity,
} from "@/redux/cart-slice";
import type { productCartType } from "@/types/redux-types";



export default function useCart() {
  const { cart, deliveryFee } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function updateCartHandler(title: string, type: "inc" | "dec") {
    dispatch(updateCartQuantity({ title, type }));
  }

  function addCartItemHandler(product: productCartType) {
    dispatch(addToCart(product));
  }

  function removeCartItemHandler(productTitle: string) {
    dispatch(removeCartItem({ title: productTitle }));
  }

  return {
    cart,
    addCartItemHandler,
    removeCartItemHandler,
    updateCartHandler,
    deliveryFee,
  };
}
