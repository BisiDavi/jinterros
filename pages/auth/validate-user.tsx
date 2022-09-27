/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layout/DefaultLayout";

export default function ValidateUser() {
  return (
    <DefaultLayout title="Welcome">
      <section className="container 2xl:px-20 h-96 flex flex-col mx-auto justify-center items-center">
        <img
          src="/check-mark-verified.gif"
          alt="success"
          className="w-1/6 mx-auto"
        />
        <p className="text-xl font-bold">
          Thanks for Signing up on Jinterros, welcome
        </p>
      </section>
    </DefaultLayout>
  );
}
