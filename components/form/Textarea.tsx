import { useFormContext } from "react-hook-form";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
  data?: any;
}
export default function Textarea({ input, data }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  }: any = useFormContext();

  if (data) {
    setValue(input.name, data[input.name]);
  }

  return (
    <div className="form-control">
      <label htmlFor={input.name} className="w-full my-4 relative">
        <textarea
          id={input.name}
          className={`${input.className} font-normal w-full py-2  px-5 placeholder-gray-300`}
          placeholder={input.placeholder}
          rows={8}
          aria-invalid={errors[input.name] ? "true" : "false"}
          {...register(input.name)}
        ></textarea>
      </label>
      <p className="text-red-500 p-0  text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
