import { useFormContext } from "react-hook-form";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Checkbox({ input }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className="w-full my-2 text-xs font-thin text-gray-400">
      <label htmlFor={input.name}>
        <input
          id={input.name}
          className="accent-orange-400  mr-2"
          type={input.type}
          {...register(input.name)}
        />
        {input.placeholder}
      </label>
      <p className="text-red-500 p-0  text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
