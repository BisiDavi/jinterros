import { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Input({ input }: Props) {
  return (
    <div className="h-12 w-full my-4">
      <input
        className={`${input.className} font-normal w-full h-12 px-5 placeholder-gray-300`}
        type={input.type}
        placeholder={input.placeholder}
      />
    </div>
  );
}
