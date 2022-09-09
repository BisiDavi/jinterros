import DefaultLayout from "@/layout/DefaultLayout";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/form/ShippingForm";

export default function Checkout() {
  return (
    <DefaultLayout title="Checkout">
      <section className="chekcout my-52 flex items-start container mx-auto">
        <ShippingForm />
        <OrderSummary />
      </section>
    </DefaultLayout>
  );
}
