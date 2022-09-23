import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import adminauthContent from "@/json/admin-auth.json";
import {
  signinSchema,
  adminSignupSchema,
} from "@/components/form/schema/authformSchema";
import Button from "@/components/button";
import displayForm from "@/components/form/displayForm";

interface Props {
  type: "login" | "signup";
}

export default function AdminForm({ type }: Props) {
  const formSchema = type === "login" ? signinSchema : adminSignupSchema;
  const methods = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const buttonText = type === "login" ? "Login" : "Sign up";

  function onSubmit(data: any) {
    console.log("data", data);
  }

  return (
    <div className="content pb-5 rounded shadow  border py-2">
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
            className="bg-orange w-1/2 mx-auto flex items-center justify-center h-10 mt-10 text-white font-bold text-xl hover:opacity-80"
          />
        </form>
      </FormProvider>
    </div>
  );
}
