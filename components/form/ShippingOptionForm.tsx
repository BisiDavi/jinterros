import { useForm, FormProvider } from "react-hook-form";
import { Fragment } from "react";

import displayForm from "@/components/form/displayForm";
import shippingOption from "@/json/shipping-option.json";

export default function ShippingOptionForm() {
  const methods = useForm({
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log("data", data);
  }

  const shippingOptioValue = methods.watch("shippingOption");

  console.log("shippingOptioValue", shippingOptioValue);

  return (
    <div className="w-full mt-8 shadow-lg pb-8">
      <h4 className="text-xl py-1 ml-4 pt-3 h-12">SELECT SHIPPING OPTION</h4>
      <hr />
      <FormProvider {...methods}>
        <form
          className="flex items-start pt-2 px-10"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {shippingOption.map((item, index) => (
            <Fragment key={index}>{displayForm(item)}</Fragment>
          ))}
        </form>
      </FormProvider>
    </div>
  );
}
