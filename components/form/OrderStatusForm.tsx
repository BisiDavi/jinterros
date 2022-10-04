import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";

import orderStatus from "@/json/order-table.json";
import displayForm from "@/components/form/displayForm";
import { adminOrderFormSchema } from "@/components/form/schema/shippingformSchema";
import Button from "@/components/button";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";

export default function OrderStatusForm({ orderData }: any) {
  const { writeData } = useFirebase();
  const methods = useForm({
    resolver: yupResolver(adminOrderFormSchema),
    mode: "all",
  });
  const toastId = useRef(null);
  const { loadingToast, updateToast } = useToast();

  function onSubmit(data: any) {
    loadingToast(toastId);
    writeData(
      JSON.stringify(data.deliveryStatus),
      `/orders/${orderData.route}/status/`
    )
      .then(() => {
        updateToast(toastId, "success", "status updated");
      })
      .catch(() => {
        updateToast(toastId, "error", "error updating status");
      });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-1/5 my-4">
        {displayForm(orderStatus[0])}
        <Button
          text="Submit"
          className="mt-4 bg-green-500 py-1 text-white font-bold px-5 hover:opacity-80"
          type="submit"
        />
      </form>
    </FormProvider>
  );
}
