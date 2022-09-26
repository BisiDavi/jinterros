import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";

export default function displayShippingElement(
  type: "main" | "shippingOption"
) {
  return checkoutForm[type].map((formItem, index) => (
    <div key={index} className="flex justify-between items-center">
      {formItem.map((item, idx) => {
        const firstClassName = idx === 0 && formItem.length === 2 ? "mr-4" : "";
        const width =
          formItem.length === 2 ? `lg:w-80 ${firstClassName}` : "w-full";
        const elementKey = `${item.name}-${idx}`;
        return (
          <div key={elementKey} className={`form-control my-2 ${width}`}>
            {displayForm(item)}
          </div>
        );
      })}
    </div>
  ));
}
