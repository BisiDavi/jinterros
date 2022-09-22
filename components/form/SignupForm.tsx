import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment } from "react";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { signupSchema } from "@/components/form/schema/authformSchema";

export default function SignupForm() {
  const methods = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all"
  });

  function onSubmit(data: any) {
    console.log("data", data);
  }

  return (
    <div className="e-full lg:w-1/2 mx-auto lg:border-l">
      <h3 className="text-xl font-bold text-orange my-5 text-center">
        New to JINTERROS
      </h3>
      <FormProvider {...methods}>
        <form
          className="items-center w-11/12 lg:w-2/3 mx-auto flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {formElements.signup.map((formElement, index) => (
            <Fragment key={`${formElement.name}-${index}`}>
              {displayForm(formElement)}
            </Fragment>
          ))}
          <Button
            text="Register"
            className="bg-orange w-full h-12 mt-10 text-white font-bold text-xl hover:opacity-80"
            type="submit"
          />
        </form>
      </FormProvider>
    </div>
  );
}
