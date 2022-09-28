import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { signupSchema } from "@/components/form/schema/authformSchema";
import useAuthMutation from "@/hooks/useAuthMutation";

export default function SignupForm() {
  const { useSignupMutation } = useAuthMutation();
  const { mutate } = useSignupMutation();
  const methods = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log("data", data);
    mutate({ userData: data, password: data.password });
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
            <div key={`${formElement.name}-${index}`} className="my-2 w-full">
              {displayForm(formElement)}
            </div>
          ))}
          <Button
            text="Register"
            type="submit"
            className="bg-orange w-full h-12 mt-4 text-white font-bold text-xl hover:opacity-80"
          />
        </form>
      </FormProvider>
    </div>
  );
}
