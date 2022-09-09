import { Fragment } from "react";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
export default function SignupForm() {
  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-xl font-bold text-orange my-5 text-center">
        New to JINTERROS
      </h3>
      <form className="items-center flex flex-col">
        {formElements.signup.map((formElement, index) => (
          <Fragment key={`${formElement.name}-${index}`}>
            {displayForm(formElement)}
          </Fragment>
        ))}
      </form>
    </div>
  );
}
