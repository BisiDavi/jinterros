import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useEffect } from "react";

import DefaultLayout from "@/layout/DefaultLayout";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/form/ShippingForm";
import useAuth from "@/hooks/useAuth";
import Paypal from "@/components/payment/Paypal";
import { useAppSelector } from "@/hooks/useRedux";
import PaypalWrapper from "@/components/payment/PaypalWrapper";

export default function Checkout() {
  const { getAuthStatus } = useAuth();
  const {
    paymentForm: { completed },
  } = useAppSelector((state) => state.form);
  const router = useRouter();
  const user = getAuthStatus();

  useEffect(() => {
    if (!user?.displayName) {
      toast.error("redirecting you to login/signup page");
      router.push("/auth");
    }
  }, [user, router]);

  return (
    <>
      <DefaultLayout title="Checkout">
        <section className="">
          <div className="form-group chekout mt-32  lg:mt-52 mb-14 px-6 flex flex-col lg:flex-row items-start container mx-auto">
            <div className="forms w-full lg:w-3/5">
              <ShippingForm />
            </div>
            <OrderSummary />
          </div>
          {completed && (
            <PaypalWrapper>
              <Paypal />
            </PaypalWrapper>
          )}
        </section>
      </DefaultLayout>
    </>
  );
}
