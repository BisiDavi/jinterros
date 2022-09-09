import DefaultLayout from "@/layout/DefaultLayout";

import checkoutForm from "@/json/checkout-form.json";
import displayForm from "@/components/form/displayForm";

export default function Checkout() {
  return (
    <DefaultLayout title="Cart">
      <section className="chekcout my-52 flex items-center container mx-auto">
        <div className="w-3/5 shadow-lg px-8">
          <h4 className="text-xl py-1 ml-4 h-12">SHIPPING ADDRESS</h4>
          <hr />
          <form>
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
          </form>
        </div>
        <div className="w-2/5 shadow-lg">
          <h4 className="text-xl py-1 ml-4">ORDER SUMMARY</h4>
          <hr />
        </div>
      </section>
    </DefaultLayout>
  );
}