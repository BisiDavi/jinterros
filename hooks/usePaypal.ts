/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from "@/hooks/useRedux";
import { useCallback } from "react";
import { useRouter } from "next/router";

import useCart from "@/hooks/useCart";
import { resetPaymentForm } from "@/redux/form-slice";
import { useAppDispatch } from "@/redux/store";
import { resetCart } from "@/redux/cart-slice";
import useFirebase from "@/hooks/useFirebase";
import useAuth from "@/hooks/useAuth";

export default function usePaypal() {
  const { getSubtotal, deliveryFee, cart } = useCart();
  const {
    paymentForm: { data: formData, completed },
  } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const { writeData } = useFirebase();
  const subtotal = getSubtotal();
  const router = useRouter();
  const { getAuthStatus } = useAuth();

  console.log("formData", formData);

  const authStatus: any = getAuthStatus();

  function getItems() {
    let cartItem: any = [];
    cart?.map((item) => {
      cartItem.push({
        name: item.title,
        unit_amount: {
          currency_code: "USD",
          value: item.price,
        },
        category: "PHYSICAL_GOODS",
        quantity: item.quantity,
      });
    });
    console.log("cartItem", cartItem);
    return cartItem;
  }

  const total = subtotal + deliveryFee;

  const createOrder: any = useCallback(
    (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: `${total}`,
              breakdown: {
                item_total: {
                  value: `${subtotal}`,
                  currency_code: "USD",
                },
                shipping: {
                  value: `${deliveryFee}`,
                  currency_code: "USD",
                },
              },
            },
            items: getItems(),
            description: "Payment for Jinterros Rum",
            shipping: {
              type: "SHIPPING",
              name: {
                full_name: `${formData.firstName} ${formData.lastName}`,
              },
              email_address: formData.email,
              address: {
                address_line_1: formData.address1,
                admin_area_1: formData.state,
                admin_area_2: formData.city,
                postal_code: formData.zip,
                country_code: formData.country,
              },
            },
          },
        ],
      });
    },
    [completed]
  );

  function onApprove(data: any, actions: any) {
    return actions.order.capture().then((details: any) => {
      console.log("details", details);
      if (details.status === "COMPLETED") {
        dispatch(resetCart());
        dispatch(resetPaymentForm());
        writeData(
          JSON.stringify(details),
          `/orders/${authStatus.email}-${details.id}/${authStatus.uid}`
        ).then(() => {
          router.push("/thanks-for-order");
        });
      }
    });
  }

  return { createOrder, onApprove, completed };
}
