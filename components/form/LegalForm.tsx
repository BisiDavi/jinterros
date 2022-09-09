import Image from "next/image";
import Button from "@/components/button";

export default function LegalForm() {
  return (
    <form className="bg-white rounded-2xl relative px-8 w-full py-3 mt-20">
      <div className="image-wrapper flex mx-auto items-center justify-center -mt-20">
        <Image src="/logo-small.webp" alt="logo" height={150} width={150} />
      </div>
      <h1 className="text-center font-bold text-3xl my-2 mt-4">
        PLEASE ENTER YOUR YEAR OF BIRTH
      </h1>
      <input
        placeholder="YYYY"
        max="3"
        className="text-7xl px-2 w-1/4 mx-auto justify-center flex my-4"
      />
      <p className="text-center">
        We use tracking and other cookies
        <span className="underline font-medium ml-1">Cookie Policy</span> &{" "}
        <span className="underline  font-medium">Privacy Policy</span>
      </p>
      <p className="mt-4 text-center">
        <span className="font-medium">Custom Cookie</span> / Accept All Cookies
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
  );
}
