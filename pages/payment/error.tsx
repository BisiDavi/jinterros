import DefaultLayout from "@/layout/DefaultLayout";

export default function ErrorPage() {
  return (
    <DefaultLayout title="Payment Succesful">
      <section className="container">
        <h1 className="text-center font-bold text-xl">Payment Error</h1>
      </section>
    </DefaultLayout>
  );
}
