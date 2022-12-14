import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import pageFormContent from "@/json/page-form.json";
import displayForm from "@/components/form/displayForm";
import Button from "@/components/button";
import { pageSchema } from "@/components/form/schema/adminSchema";
import usePage from "@/hooks/usePage";
import type { cocktailFormType } from "@/types/form-types";

interface Props {
  data?: cocktailFormType;
}

export default function PageForm({ data }: Props) {
  const methods = useForm({
    resolver: yupResolver(pageSchema),
    mode: "all",
  });

  const { savePage } = usePage();

  function onSubmit(data: any) {
    savePage(data, methods);
  }
  return (
    <div className="pageForm w-full">
      <h4 className="font-bold text-2xl text-center my-2">Upload Page</h4>
      <FormProvider {...methods}>
        <form
          className="border rounded-xl shadow p-4 px-6 w-full"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {pageFormContent.map((formItemArray, index) => (
            <div
              className="form-group mb-4 flex w-full justify-between"
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
                    {displayForm(item, data)}
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
    </div>
  );
}
