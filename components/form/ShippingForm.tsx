import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillCheckCircle } from "react-icons/ai";

import Button from "@/components/button";
import { shippingformSchema } from "@/components/form/schema/shippingformSchema";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updatePaymentForm } from "@/redux/form-slice";
import { updateDeliveryFee } from "@/redux/cart-slice";
import displayShippingElement from "@/lib/displayShippingElement";

export default function ShippingForm() {
  const methods = useForm({
    resolver: yupResolver(shippingformSchema),
    mode: "all",
  });
  const {paymentForm:{data:formData}} = useAppSelector(state => state.form)
  const dispatch = useAppDispatch();
  const { getAuthStatus } = useAuth();
  const user: any = getAuthStatus();

  const badgeIcon =
    Object.values(methods.formState.errors).length === 0
      ? "text-orange"
      : "text-gray-400";

  const {
    formState: { errors },
  }: any = methods;

  function onSubmit(data: any) {
    console.log("data", data);
    dispatch(updatePaymentForm({ data, completed: true }));
    dispatch(updateDeliveryFee(Number(data.shippingOption)));
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
        <AiFillCheckCircle className={`text-4xl ${badgeIcon} ml-4 mr-4`} />
        <h4 className="text-xl py-1 ml-4 pt-3 h-12">SHIPPING ADDRESS</h4>
      </div>
      <hr />
      <FormProvider {...methods}>
        <form
          className="px-6 lg:px-10 pt-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <>
            {displayShippingElement("main", formData)}
            <h4 className="text-xl py-1 pt-3">SELECT SHIPPING OPTION</h4>
            {displayShippingElement("shippingOption", formData)}
            {errors.shippingOption?.message && (
              <p className="text-red-500 -pt-20 text-xs">
                {errors["shippingOption"]?.message}
              </p>
            )}

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
