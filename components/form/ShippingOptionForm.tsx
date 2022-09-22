import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ShippingOptionForm() {
  const methods = useForm({
    // resolver: yupResolver(shippingformSchema),
    mode: "all",
  });
  return (
    <div className="w-full mt-8 shadow-lg pb-8">
      <h4 className="text-xl py-1 ml-4 pt-3 h-12">SELECT SHIPPING OPTION</h4>
      <hr />
      <FormProvider {...methods}>
        <form></form>
      </FormProvider>
    </div>
  );
}
