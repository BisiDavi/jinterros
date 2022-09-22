import SpinnerRipple from "@/components/loader/SpinnerRipple";
import DefaultLayout from "@/layout/DefaultLayout";

export default function PaymentSuccessful() {
  return (
    <DefaultLayout title="Payment Succesful">
      <section className="container">
        <SpinnerRipple />
        <h1 className="text-center font-bold text-xl">Payment successful</h1>
      </section>
    </DefaultLayout>
  );
}
