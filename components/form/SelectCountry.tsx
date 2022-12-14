import { useFormContext } from "react-hook-form";

import countriesData from "@/json/countries.json";
import type { InputType } from "@/types/form-types";

interface Props {
  content: InputType;
  data?: any;
}

export default function SelectCountry({ content, data }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  }: any = useFormContext();

  const countries: { name: string; Iso2: string | any }[] = countriesData;

  if (data) {
    const countryCode =
      data[content.name].length > 4
        ? countriesData.filter((item) => item.name === data[content.name])[0]
            .Iso2
        : data[content.name];
    setValue(content.name, countryCode);
  }

  return (
    <div className={`form flex flex-col relative w-full`}>
      <label htmlFor={content.name} className="font-medium text-base">
        {content.label}
      </label>
      <select
        id={content.name}
        className="h-12 px-4 border input-border-lighter"
        aria-invalid={errors[content.name] ? "true" : "false"}
        {...register(content.name)}
      >
        <option value="">Select Country</option>
        {countries.map((item) => (
          <option key={item.Iso2} value={item.Iso2}>
            {item.name}
          </option>
        ))}
      </select>
      <p className="text-red-500 text-xs">{errors[content.name]?.message}</p>
    </div>
  );
}
