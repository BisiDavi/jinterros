import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import useCart from "@/hooks/useCart";
import { useAppSelector } from "@/hooks/useRedux";

export default function Paypal() {
  const { total, amount } = useCart();

  const {
    paymentForm: { data: formData },
  } = useAppSelector((state) => state.form);
  const {
    paymentForm: { completed },
  } = useAppSelector((state) => state.form);

  console.log("formData", formData);

  return (
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
        style={{ layout: "vertical", label: "checkout" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: `${total}`,
                  breakdown: {
                    item_total: { value: `${amount}`, currency_code: "USD" },
                    shipping: {
                      value: formData.shippingOption,
                      currency_code: "USD",
                    },
                  },
                },
                payee: {
                  email_address: formData.email,
                },
                description:
                  "Payment for the purchase of Rum from Jinterros Stores",
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
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
