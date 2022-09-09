import { Fragment } from "react";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";

export default function SignupForm() {
  return (
    <div className="w-1/2 mx-auto border-l">
      <h3 className="text-xl font-bold text-orange my-5 text-center">
        New to JINTERROS
      </h3>
      <form className="items-center w-2/3 mx-auto flex flex-col">
        {formElements.signup.map((formElement, index) => (
          <Fragment key={`${formElement.name}-${index}`}>
            {displayForm(formElement)}
          </Fragment>
        ))}
        <Button
          text="Register"
          className="bg-orange w-full h-12 mt-10 text-white font-bold text-xl hover:opacity-80"
        />
      </form>
    </div>
  );
}
