import { useFormContext } from "react-hook-form";
import { useState } from "react";

import ToggleEye from "@/components/form/ToggleEye";
import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
  data?: any;
}

export default function Input({ input, data }: Props) {
  const [passwordVisiblity, setPasswordVisibility] = useState(false);

  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  const disableInput = input?.disabled ? true : false;

  const inputType =
    input.type === "password"
      ? passwordVisiblity
        ? "text"
        : "password"
      : input.type;

  const inputId = input.id ? input.id : input.name;
  const defaultValue = data && data[input.name] ? data[input.name] : "";

  return (
    <div className="form-control">
      <label htmlFor={input.name} className="h-12 w-full my-4 relative">
        <input
          id={inputId}
          className={`${input.className} font-normal w-full h-12 px-5 placeholder-gray-300`}
          type={inputType}
          placeholder={input.placeholder}
          aria-invalid={errors[input.name] ? "true" : "false"}
          disabled={disableInput}
          defaultValue={defaultValue}
          {...register(input.name)}
        />
        {input.type === "password" && (
          <ToggleEye
            passwordVisiblity={passwordVisiblity}
            setPasswordVisibility={setPasswordVisibility}
          />
        )}
      </label>
      {input?.note && (
        <p className="text-red text-blue-500 text-xs">{input.note}</p>
      )}
      <p className="text-red-500 p-0  text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
