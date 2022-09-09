import { Fragment } from "react";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";

export default function SigninForm() {
  return (
    <div>
      <h3 className="text-xl font-bold text-orange my-10 text-center">
        Sign In
      </h3>
      {formElements.signin.map((formElement, index) => (
        <Fragment key={`${formElement.name}-${index}`}>
          {displayForm(formElement)}
        </Fragment>
      ))}
    </div>
  );
}
