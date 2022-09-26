import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillCheckCircle } from "react-icons/ai";

import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { shippingformSchema } from "@/components/form/schema/shippingformSchema";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch } from "@/hooks/useRedux";
import { updatePaymentForm } from "@/redux/form-slice";

function displayShippingElement(type: "main" | "shippingOption") {
  return checkoutForm[type].map((formItem, index) => (
    <div key={index} className="flex justify-between items-center">
      {formItem.map((item, idx) => {
        const firstClassName = idx === 0 && formItem.length === 2 ? "mr-4" : "";
        const width =
          formItem.length === 2 ? `lg:w-80 ${firstClassName}` : "w-full";
        return (
          <div key={item.name} className={`form-control my-2 ${width}`}>
            {displayForm(item)}
          </div>
        );
      })}
    </div>
  ));
}

export default function ShippingForm() {
  const methods = useForm({
    resolver: yupResolver(shippingformSchema),
    mode: "all",
  });
  const dispatch = useAppDispatch();
  const { getAuthStatus } = useAuth();
  const user: any = getAuthStatus();

  function onSubmit(data: any) {
    console.log("data", data);
    dispatch(updatePaymentForm({ data, completed: false }));
  }

  function splitName(name: string) {
    return name?.split(" ");
  }

  if (user?.displayName) {
    methods.setValue("email", user?.email);
    methods.setValue("firstName", splitName(user?.displayName)[0]);
    methods.setValue("lastName", splitName(user?.displayName)[1]);
  }

  return (
    <div className="w-full order-2 lg:order-1  shadow-lg pb-8">
      <div className="top flex items-center pl-4">
        <AiFillCheckCircle className="text-4xl text-orange ml-4 mr-4" />
        <span className="p-4 mx-4 h-4 w-4 flex items-center justify-center text-white font-bold rounded-full bg-orange">
          1
        </span>
        <h4 className="text-xl py-1 ml-4 pt-3 h-12">SHIPPING ADDRESS</h4>
      </div>
      <hr />
      <FormProvider {...methods}>
        <form
          className="px-6 lg:px-10 pt-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <>
            {displayShippingElement("main")}
            <h4 className="text-xl py-1 pt-3">
              SELECT SHIPPING OPTION
            </h4>
            {displayShippingElement("shippingOption")}
            <Button
              className="bg-rum-brown w-full hover:opacity-80 flex items-center py-2 justify-center text-white font-bold mt-4"
              text="SAVE ADDRESS"
              type="submit"
            />
          </>
        </form>
      </FormProvider>
    </div>
  );
}
