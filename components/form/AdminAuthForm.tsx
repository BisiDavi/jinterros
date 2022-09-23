import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment } from "react";

import adminauthContent from "@/json/admin-auth.json";
import { signupSchema } from "@/components/form/schema/authformSchema";
import Button from "@/components/button";
import displayForm from "@/components/form/displayForm";

export default function AdminLoginForm() {
  const methods = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all",
  });

  return (
    <div className="content h-80 rounded shadow  border py-2">
      <h4 className="text-center font-bold my-2 text-xl">Admin Login</h4>
      <FormProvider {...methods}>
        <form className="mx-4">
          {adminauthContent.login.map((item) => (
            <div key={item.name} className="my-4">
              {displayForm(item)}
            </div>
          ))}
          <Button
            text="login"
            className="bg-orange w-1/2 mx-auto flex items-center justify-center h-10 mt-10 text-white font-bold text-xl hover:opacity-80"
          />
        </form>
      </FormProvider>
    </div>
  );
}
