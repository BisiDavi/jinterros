import { useFormContext } from "react-hook-form";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function RadioInput({ input }: Props) {
  const { register }: any = useFormContext();

  return (
    <div className="w-full my-2 font-thin">
      <label className="font-bold">
        <input
          className="accent-orange-400 text-xs  mr-2"
          type={input.type}
          value={input.value}
          {...register(input.name)}
        />
        {input.label}
      </label>
      <p>{input?.note}</p>
      {input.name === "shippingOption" && (
        <span className="text-xl">${input?.value}</span>
      )}
    </div>
  );
}
