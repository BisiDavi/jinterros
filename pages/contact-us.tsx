/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layout/DefaultLayout";

export default function ContactUs() {
  return (
    <DefaultLayout title="Contact us">
      <section className="mt-32 lg:mt-60 mb-10 lg:mb-40 w-5/6 lg:w-3/5 shadow-xl mx-auto">
        <div className="content flex flex-col mx-auto items-center justify-center">
          <h5 className="text-lg my-6 font-bold">FEEL FREE TO CONTACT US</h5>
          <p className="text-rum-brown font-semibold text-xl">(646)642-3886</p>
          <p className="text-rum-brown font-semibold text-xl">
            JordanJines@gmail.com
          </p>
          <p className="mt-10 font-medium font-semibold">
            Page Loft, 1228 Diamond Street,{" "}
          </p>
          <p className="font-semibold">San Francisco</p>
          <div className="instagram mt-10 font-semibold flex items-center mb-10">
            <img
              src="/instagram.webp"
              alt="instagram"
              title="follow on JinterrossRum instagram"
              className="h-5"
            />
            <span className="text-rum-brown ml-1">JinterrossRum</span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
