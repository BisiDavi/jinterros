import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import useCart from "@/hooks/useCart";
import { useAppSelector } from "@/hooks/useRedux";
import useFirebase from "@/hooks/useFirebase";

export default function Paypal() {
  const { getSubtotal, deliveryFee } = useCart();
  const { writeData } = useFirebase();
  const subtotal = getSubtotal();

  const total = subtotal + deliveryFee;

  const {
    paymentForm: { data: formData },
  } = useAppSelector((state) => state.form);
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
            console.log("details", details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
