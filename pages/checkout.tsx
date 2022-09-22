import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useEffect } from "react";

import DefaultLayout from "@/layout/DefaultLayout";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/form/ShippingForm";
import useAuth from "@/hooks/useAuth";

export default function Checkout() {
  const { getAuthStatus } = useAuth();
  const router = useRouter();
  const user = getAuthStatus();

  useEffect(() => {
    if (!user) {
      toast.error("redirecting you to login/signup page");
      router.push("/auth");
    }
  }, [user, router]);

  return (
    <DefaultLayout title="Checkout">
      <section className="chekout mt-32 mb-14 lg:my-52 px-6 flex flex-col lg:flex-row items-start container mx-auto">
        <div className="forms lg:w-3/5">
          <ShippingForm />
        </div>
        <OrderSummary />
      </section>
    </DefaultLayout>
  );
}
