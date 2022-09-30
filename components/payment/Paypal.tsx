/* eslint-disable react-hooks/exhaustive-deps */
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import { useAppSelector } from "@/hooks/useRedux";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import usePaypal from "@/hooks/usePaypal";

export default function Paypal() {
  const { createOrder, onApprove, completed } = usePaypal();
  const [{ isPending }] = usePayPalScriptReducer();



  return (
    <div className="wrapper bg-white relative z-10">
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
          createOrder={createOrder}
          forceReRender={createOrder}
          onApprove={onApprove}
        />
      )}
    </div>
  );
}
