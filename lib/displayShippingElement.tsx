import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";

export default function displayShippingElement(
  type: "main" | "shippingOption",
  data?: any
) {
  return checkoutForm[type].map((formItem, index) => {
    const elementClassName =
      type === "shippingOption" ? "flex-col lg:flex-row" : "";
    return (
      <div
        key={index}
        className={`flex justify-between ${elementClassName} w-full items-center`}
      >
        {formItem.map((item, idx) => {
          const firstClassName =
            idx === 0 && formItem.length === 2 ? "mr-4" : "";
          const width =
            formItem.length === 2 ? `w-1/2 ${firstClassName}` : "w-full";
          const elementKey = `${item.name}-${idx}`;
          return (
            <div key={elementKey} className={`form-control my-2  ${width}`}>
              {displayForm(item, data)}
            </div>
          );
        })}
      </div>
    );
  });
}
