import { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Input({ input }: Props) {
  return (
    <div>
      <input
        className={`${input.className} h-12 w-1/2`}
        type={input.type}
        placeholder={input.placeholder}
      />
    </div>
  );
}
