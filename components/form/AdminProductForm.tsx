import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import productFormContent from "@/json/product-form.json";
import displayForm from "./displayForm";

export default function AdminProductForm() {
  const methods = useForm({
    // resolver: yupResolver(legalSchema),
    mode: "all",
  });
  const {
    register,
    watch,
    formState: { errors },
  }: any = methods;
  return (
    <>
      <h4 className="font-bold text-2xl text-center my-2">Upload Products</h4>
      <FormProvider {...methods}>
        <form className="border rounded-xl shadow p-4">
          {productFormContent.map((formItemArray, index) => (
            <div
              className="form-group my-4 flex w-full justify-between"
              key={index}
            >
              {formItemArray.map((item, index) => {
                const formStyle =
                  formItemArray.length === 2 ? "w-1/2" : "w-full";
                const firstElementStyle =
                  formItemArray.length === 2 && index === 0 ? "mr-8" : "";
                return (
                  <div
                    className={`${formStyle} form-element ${firstElementStyle}`}
                    key={index}
                  >
                    {displayForm(item)}
                  </div>
                );
              })}
            </div>
          ))}
        </form>
      </FormProvider>
    </>
  );
}
