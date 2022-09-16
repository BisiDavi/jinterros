import DefaultLayout from "@/layout/DefaultLayout";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/form/ShippingForm";

export default function Checkout() {
  return (
    <DefaultLayout title="Checkout">
      <section className="chekcout mt-32 mb-14 lg:my-52 px-6 flex flex-col lg:flex-row items-start container mx-auto">
        <ShippingForm />
        <OrderSummary />
      </section>
    </DefaultLayout>
  );
}
