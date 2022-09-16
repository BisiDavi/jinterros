import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";

export default function ShippingForm() {
  return (
    <div className="lg:w-3/5 shadow-lg pb-8">
      <h4 className="text-xl py-1 ml-4 pt-3 h-12">SHIPPING ADDRESS</h4>
      <hr />
      <form className="px-10">
        {checkoutForm.map((formItem, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              {formItem.map((item, idx) => {
                const width = formItem.length === 2 ? `w-80` : "w-full";
                return (
                  <div key={item.name} className={`form-control ${width}`}>
                    {displayForm(item)}
                  </div>
                );
              })}
            </div>
          );
        })}
        <Button
          className="bg-rum-brown w-full flex items-center py-2 justify-center text-white font-bold mt-4"
          text="SAVE ADDRESS"
        />
      </form>
    </div>
  );
}
