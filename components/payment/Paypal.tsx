import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import useCart from "@/hooks/useCart";

export default function Paypal() {
  const { amount } = useCart();

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
        className="mx-auto flex justify-center mb-8 w-2/3"
        style={{ layout: "vertical", label: "checkout" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: `${amount}`,
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
        }}
      />
    </PayPalScriptProvider>
  );
}
