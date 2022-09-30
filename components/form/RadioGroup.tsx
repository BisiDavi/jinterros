import displayShippingElement from "@/lib/displayShippingElement";
import { useAppSelector } from "@/hooks/useRedux";

export default function RadioGroup({ methods }: any) {
  const {
    formState: { errors },
  }: any = methods;

  const {
    paymentForm: { data: formData },
  } = useAppSelector((state) => state.form);

  return (
    <div className="flex flex-col">
      <h4 className="text-xl py-1 pt-3">SELECT SHIPPING OPTION</h4>
      <div className="group flex lg:flex-row flex-col">
        {displayShippingElement("shippingOption", formData)}
      </div>
      {errors.shippingOption?.message && (
        <p className="text-red-500 -pt-20 text-xs">
          {errors["shippingOption"]?.message}
        </p>
      )}
    </div>
  );
}
