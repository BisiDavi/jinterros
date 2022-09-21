import { useFormContext } from "react-hook-form";
import { useState } from "react";
import ToggleEye from "@/components/form/ToggleEye";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Input({ input }: Props) {
  const [passwordVisiblity, setPasswordVisibility] = useState(false);

  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className="h-12 w-full my-4">
      <input
        className={`${input.className} font-normal w-full h-12 px-5 placeholder-gray-300`}
        type={input.type}
        aria-invalid={errors[input.name] ? "true" : "false"}
        placeholder={input.placeholder}
        {...register(input.name)}
      />
      {input.elementType === "password" && (
        <ToggleEye
          passwordVisiblity={passwordVisiblity}
          setPasswordVisibility={setPasswordVisibility}
        />
      )}
      <p className="text-red-500 p-0  text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
