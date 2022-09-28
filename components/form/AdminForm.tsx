import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import adminauthContent from "@/json/admin-auth.json";
import {
  signinSchema,
  adminSignupSchema,
} from "@/components/form/schema/authformSchema";
import Button from "@/components/button";
import displayForm from "@/components/form/displayForm";
import useAuthMutation from "@/hooks/useAuthMutation";

interface Props {
  type: "login" | "signup";
}

export default function AdminForm({ type }: Props) {
  const { useSignupMutation, useSigninMutation } = useAuthMutation();
  const { mutate } = useSignupMutation();
  const signinMutate = useSigninMutation();

  const formSchema = type === "login" ? signinSchema : adminSignupSchema;
  const methods = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const buttonText = type === "login" ? "Login" : "Sign up";

  function onSubmit(data: any) {
    console.log("data", data);
    if (type === "signup") {
      mutate({ userData: data, password: data.password });
    } else {
      signinMutate.mutate(data);
    }
  }

  return (
    <div className="content pb-5 rounded shadow  border py-2">
      {type === "login" && (
        <h4 className="text-center font-bold text-2xl mb-2">Login</h4>
      )}
      <FormProvider {...methods}>
        <form className="mx-4" onSubmit={methods.handleSubmit(onSubmit)}>
          {adminauthContent[type].map((item) => (
            <div key={item.name} className="my-4">
              {displayForm(item)}
            </div>
          ))}

          <Button
            text={buttonText}
            type="submit"
            className="bg-orange w-1/2 mx-auto flex items-center justify-center h-10 mt-6 text-white font-bold text-xl hover:opacity-80"
          />
        </form>
      </FormProvider>
    </div>
  );
}
