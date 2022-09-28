import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  addToCart,
  removeCartItem,
  updateCartQuantity,
} from "@/redux/cart-slice";
import { updateSlideCart } from "@/redux/ui-slice";
import type { productCartType } from "@/types/redux-types";

export default function useCart() {
  const { cart, deliveryFee } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function updateCartHandler(title: string, type: "inc" | "dec") {
    dispatch(updateCartQuantity({ title, type }));
  }

  function addCartItemHandler(product: productCartType) {
    dispatch(updateSlideCart(true));
    dispatch(addToCart(product));
  }

  function removeCartItemHandler(productTitle: string) {
    dispatch(removeCartItem({ title: productTitle }));
  }

  function slideCartHandler(status: boolean) {
    dispatch(updateSlideCart(status));
  }

  function getSubtotal() {
    let total = 0;
    cart &&
      cart.map((item) => {
        total += item.amount;
      });
    total;
    return total;
  }

  return {
    cart,
    addCartItemHandler,
    removeCartItemHandler,
    slideCartHandler,
    updateCartHandler,
    deliveryFee,
    getSubtotal,
  };
}
