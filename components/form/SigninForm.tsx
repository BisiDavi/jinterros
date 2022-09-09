/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";

export default function SigninForm() {
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center">
      <h3 className="text-xl font-bold text-orange my-5 text-center">
        Sign In
      </h3>
      <form className="items-center flex flex-col w-2/3 mx-auto">
        {formElements.signin.map((formElement, index) => (
          <Fragment key={`${formElement.name}-${index}`}>
            {displayForm(formElement)}
          </Fragment>
        ))}
        <Button
          text="Sign In"
          className="bg-orange w-full h-12 mt-10 text-white font-bold text-xl hover:opacity-80"
        />
        <div className="or flex items-center w-full my-6 grayish">
          <hr className="gray-border w-full" /> <span className="mx-2">OR</span>{" "}
          <hr className="gray-border w-full" />
        </div>
        <Button
          text="Sign In with Google"
          className="input-border-light flex items-center justify-center w-full relative text-gray-400 h-12 text-white font-light text-xl bg-orange-hover hover:text-white"
          icon={
            <img
              src="/google-icon.webp"
              alt="google icon"
              className="absolute left-5"
            />
          }
        />
      </form>
    </div>
  );
}