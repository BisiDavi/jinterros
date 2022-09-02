import Image from "next/image";

import FormLayout from "@/layout/FormLayout";
import Button from "@/components/button";

export default function LegalForm() {
  return (
    <FormLayout>
      <div className="content ">
        <h4 className="font-bold text-center">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING AND CONSUMING ALCOHOL TO ENTER
          THIS SITE
        </h4>
        <form className="bg-white rounded-2xl relative px-8 w-full py-4 mt-32">
          <div className="image-wrapper flex mx-auto items-center justify-center -mt-28">
            <Image src="/logo-small.webp" alt="logo" height={200} width={200} />
          </div>
          <h1 className="text-center font-bold text-3xl">
            PLEASE ENTER YOUR YEAR OF BIRTH
          </h1>

          <p className="text-center">
            We use tracking and other cookies
            <span className="underline font-medium">Cookie Policy</span> &{" "}
            <span className="underline  font-medium">Privacy Policy</span>
          </p>
          <p className="mt-6 text-center">
            <span className="font-medium">Custom Cookie</span> / Accept All
            Cookies
          </p>
          <div className="button-group flex items-center my-8">
            <Button
              text="MANAGE"
              className="border border-brown-light bg-dark-brown-hover hover:text-white px-20 py-4 flex mx-auto"
            />
            <Button
              text="AGREE"
              className="border hover:opacity-50 bg-dark-brown text-white px-20 py-4 flex mx-auto"
            />
          </div>
        </form>
      </div>
    </FormLayout>
  );
}
