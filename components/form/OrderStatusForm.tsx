import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import orderStatus from "@/json/order-table.json";
import displayForm from "@/components/form/displayForm";
import { adminOrderFormSchema } from "@/components/form/schema/shippingformSchema";
import Button from "@/components/button";

export default function OrderStatusForm() {
  const methods = useForm({
    resolver: yupResolver(adminOrderFormSchema),
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log("data", data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-1/5 my-4">
        {displayForm(orderStatus[0])}
        <Button
          text="Submit"
          className="mt-4 bg-green-500 h-10 text-white font-bold px-4 hover:opacity-80"
        />
      </form>
    </FormProvider>
  );
}
