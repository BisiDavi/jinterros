import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";
import { useAppSelector } from "@/hooks/useRedux";
import useFirebase from "@/hooks/useFirebase";

export default function Paypal() {
  const { getSubtotal, deliveryFee, cart } = useCart();

  const { writeData } = useFirebase();
  const subtotal = getSubtotal();
  const { getAuthStatus } = useAuth();

  const authStatus: any = getAuthStatus();

  console.log("authStatus", authStatus);
  console.log("cart", cart);

  const total = subtotal + deliveryFee;

  function getItems() {
    let cartItem: any = [];
    cart?.map((item) => {
      cartItem.push({
        name: item.title,
        unit_amount: {
          currency_code: "USD",
          value: item.amount,
        },
        category: "PHYSICAL_GOODS",
        quantity: item.quantity,
      });
    });
    console.log("cartItem", cartItem);
    return cartItem;
  }

  const {
    paymentForm: { data: formData },
  } = useAppSelector((state) => state.form);
  const {
    paymentForm: { completed },
  } = useAppSelector((state) => state.form);

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
              const name = details.payer.name.given_name;
              console.log("details", details);
              console.log(
                "Capture result",
                details,
                JSON.stringify(details, null, 2)
              );
              const data = {};
              writeData(`/orders/${authStatus.email}/${authStatus.uid}`, "");
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
