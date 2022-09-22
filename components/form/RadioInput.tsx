import { useFormContext } from "react-hook-form";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function RadioInput({ input }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  console.log("input", input);

  return (
    <div className="w-full my-2 text-xs font-thin text-red-400">
      <label className="font-bold text-red-500">
        <input
          className="accent-orange-400 text-xs  mr-2"
          type={input.type}
          {...register(input.name)}
        />
        {input.label}
      </label>
      <p>{input?.note}</p>
      <p className="text-red-500 p-0  text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
