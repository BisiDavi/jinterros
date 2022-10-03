import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import type { PropsWithChildren } from "react";

export default function PaypalWrapper({ children }: PropsWithChildren) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
        currency: "USD",
        components: "buttons",
        intent: "capture",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
