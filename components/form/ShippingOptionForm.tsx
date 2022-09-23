/* eslint-disable react-hooks/exhaustive-deps */
import { useForm, FormProvider } from "react-hook-form";
import { Fragment, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import displayForm from "@/components/form/displayForm";
import shippingOption from "@/json/shipping-option.json";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateDeliveryFee } from "@/redux/cart-slice";

export default function ShippingOptionForm() {
  const dispatch = useAppDispatch();
  const methods = useForm({
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log("data", data);
  }

  const shippingOptionValue = methods.watch("shippingOption");

  useEffect(() => {
    if (shippingOptionValue) {
      dispatch(updateDeliveryFee(shippingOption));
    }
  }, [shippingOptionValue]);

  console.log("shippingOptioValue", shippingOptionValue);

  const activeForm = shippingOptionValue
    ? "text-orange"
    : "text-orange opacity-50";

  console.log("activeForm", activeForm);

  return (
    <div className="w-full mt-10 shadow-lg pb-8">
      <div className="top flex items-center pl-4">
        <AiFillCheckCircle className={`text-4xl ml-4 mr-4 ${activeForm}`} />
        <span className="p-4 mx-4 h-4 w-4 flex items-center justify-center text-white font-bold rounded-full bg-orange">
          2
        </span>
        <h4 className="text-xl py-1 ml-4 pt-3 h-12">SELECT SHIPPING OPTION</h4>
      </div>
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
