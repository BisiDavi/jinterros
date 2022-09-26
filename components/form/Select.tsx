import { useFormContext } from "react-hook-form";
import type { InputType } from "@/types/form-types";

interface Props {
  content: InputType;
  data?: any;
}

export default function Select({ content, data }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  }: any = useFormContext();

  if (data) {
    setValue(content.name, data[content.name]);
  }

  return (
    <div className="form-control">
      <label className="mb-0 font-normal text-gray-600 text-xl">
        {content.label}
      </label>
      {content.options && (
        <select
          name={content.name}
          id={content.name}
          className="input-border-lighter font-normal w-full h-12 px-5 placeholder-gray-300"
          {...register(content.name)}
        >
          {content?.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      )}
      <p className="text-red-500 p-0  text-xs">
        {errors[content.name]?.message}
      </p>
    </div>
  );
}
