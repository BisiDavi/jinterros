import ShippingForm from "@/components/form/ShippingForm";
import Paypal from "@/components/payment/Paypal";
import PaypalWrapper from "@/components/payment/PaypalWrapper";
import { useAppSelector } from "@/hooks/useRedux";
import PaypalDetails from "./PaypalDetails";

export default function CheckoutView() {
  const { paymentForm } = useAppSelector((state) => state.form);
  return (
    <>
      <div className="forms w-full lg:w-3/5">
        {paymentForm.completed ? (
          <>
            <PaypalDetails details={paymentForm.data} />
            <PaypalWrapper>
              <Paypal />
            </PaypalWrapper>
          </>
        ) : (
          <ShippingForm />
        )}
      </div>
    </>
  );
}
