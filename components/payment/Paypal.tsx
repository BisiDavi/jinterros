import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import useCart from "@/hooks/useCart";
import { useAppSelector } from "@/hooks/useRedux";

export default function Paypal() {
  const { total } = useCart();
  const {
    paymentForm: { completed },
  } = useAppSelector((state) => state.form);

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
        onShippingChange={(data, actions) => {
          console.log("data", data);
          return actions.resolve();
        }}
      />
    </PayPalScriptProvider>
  );
}
