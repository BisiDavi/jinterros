/* eslint-disable @next/next/no-img-element */
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import formElements from "@/json/auth.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { signinSchema } from "@/components/form/schema/authformSchema";
import useAuthMutation from "@/hooks/useAuthMutation";
import useFirebase from "@/hooks/useFirebase";

export default function SigninForm() {
  const { useSigninMutation } = useAuthMutation();
  const { mutate } = useSigninMutation();
  const { googleProvider } = useFirebase();

  const methods = useForm({
    resolver: yupResolver(signinSchema),
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log("data", data);
    mutate(data);
  }

  return (
    <div className="w-full lg:w-1/2 mx-auto flex flex-col justify-center">
      <h3 className="text-xl font-bold text-orange my-5 text-center">
        Sign In
      </h3>
      <FormProvider {...methods}>
        <form
          className="items-center flex flex-col w-5/6 lg:w-2/3 mx-auto"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {formElements.signin.map((formElement, index) => (
            <div key={`${formElement.name}-${index}`} className="my-2 w-full">
              {displayForm(formElement)}
            </div>
          ))}
          <Button
            text="Sign In"
            type="submit"
            className="bg-orange w-full h-12 mt-10 text-white font-bold text-xl hover:opacity-80"
          />
        </form>
      </FormProvider>
      <div className="items-center flex flex-col w-5/6 lg:w-2/3 mx-auto">
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
          onClick={googleProvider}
        />
      </div>
    </div>
  );
}
