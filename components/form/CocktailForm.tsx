import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import cocktailFormContent from "@/json/cocktail-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { cocktailSchema } from "@/components/form/schema/adminProductSchema";
import useCocktail from "@/hooks/useCocktail";

export default function CocktailForm() {
  const methods = useForm({
    resolver: yupResolver(cocktailSchema),
    mode: "all",
  });

  const { saveCocktail } = useCocktail();

  function onSubmit(data: any) {
    saveCocktail(data, methods);
  }
  return (
    <>
      <h4 className="font-bold text-2xl text-center my-2">Upload Cocktail</h4>
      <FormProvider {...methods}>
        <form
          className="border rounded-xl shadow p-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {cocktailFormContent.map((formItemArray, index) => (
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
          <Button
            text="Submit"
            type="submit"
            className="bg-green-500 mx-auto flex text-white  px-4 py-1 font-bold text-xl rounded-md hover:opacity-80"
          />
        </form>
      </FormProvider>
    </>
  );
}
