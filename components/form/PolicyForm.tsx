import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import policyFormContent from "@/json/policy-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { policySchema } from "@/components/form/schema/adminSchema";
import usePolicyForm from "@/hooks/usePolicyForm";
import type { policyFormType } from "@/types/form-types";

interface Props {
  data?: policyFormType;
}

export default function PolicyForm({ data }: Props) {
  const { savePolicy } = usePolicyForm();

  const methods = useForm({
    resolver: yupResolver(policySchema),
    mode: "all",
  });

  function onSubmit(data: any) {
    savePolicy(data, methods);
  }
  return (
    <>
      <h4 className="font-bold text-2xl text-center my-2">
        Upload Site Policy
      </h4>
      <p className="text-center text-red-500 mb-2 text-sm">You can only update the Policy</p>
      <FormProvider {...methods}>
        <form
          className="border rounded-xl shadow p-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {policyFormContent.map((formItemArray, index) => (
            <div
              className="form-group my-4 flex w-full justify-between"
              key={index}
            >
              {formItemArray.map((item, index) => {
                const formStyle =
                  formItemArray.length === 2 ? "w-1/2" : "w-full";
                const firstElementStyle =
                  formItemArray.length === 2 && index === 0 ? "mr-8" : "";
                return (
                  <div
                    className={`${formStyle} form-element ${firstElementStyle}`}
                    key={index}
                  >
                    {displayForm(item, data)}
                  </div>
                );
              })}
            </div>
          ))}
          <Button
            text="Submit"
            type="submit"
            className="bg-green-500 mx-auto flex text-white  px-4 py-1 font-bold text-xl rounded-md hover:opacity-80"
          />
        </form>
      </FormProvider>
    </>
  );
}
