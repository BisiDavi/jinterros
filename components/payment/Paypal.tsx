/* eslint-disable react-hooks/exhaustive-deps */
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import useFirebase from "@/hooks/useFirebase";
import { resetCart } from "@/redux/cart-slice";
import { resetPaymentForm } from "@/redux/form-slice";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";

export default function Paypal() {
  const { getSubtotal, deliveryFee, cart } = useCart();
  const router = useRouter();
  const {
    paymentForm: { completed },
  } = useAppSelector((state) => state.form);
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();
  const {
    paymentForm: { data: formData },
  } = useAppSelector((state) => state.form);

  useEffect(() => {
    if (completed) {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
        },
      });
    }
  }, [completed]);

  const { writeData } = useFirebase();
  const subtotal = getSubtotal();
  const { getAuthStatus } = useAuth();
  const appDispatch = useAppDispatch();

  const authStatus: any = getAuthStatus();

  const total = subtotal + deliveryFee;

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

  console.log("formData", formData);

  return (
    <div className="wrapper bg-white relative z-10">
      <PayPalScriptProvider
        options={{
          "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
          currency: "USD",
          components: "buttons",
          intent: "capture",
        }}
      >
        {isPending ? (
          <SpinnerLoader loadingText="Loading Paypal..." />
        ) : (
          <PayPalButtons
            className="mx-auto flex justify-center mb-8 w-1/3"
            disabled={!completed}
            style={{
              layout: "vertical",
              label: "checkout",
            }}
            createOrder={(data, actions) => {
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
            }}
            onApprove={(data, actions: any) => {
              return actions.order.capture().then((details: any) => {
                console.log("details", details);
                if (details.status === "COMPLETED") {
                  appDispatch(resetCart());
                  appDispatch(resetPaymentForm());
                  writeData(
                    `/orders/${authStatus.email}-${details.id}/${authStatus.uid}`,
                    JSON.stringify(details)
                  ).then(() => {
                    router.push("/thanks-for-order");
                  });
                }
              });
            }}
          />
        )}
      </PayPalScriptProvider>
    </div>
  );
}
