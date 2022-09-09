import { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Input({ input }: Props) {
  return (
    <div className="h-12 w-2/3 my-4">
      <input
        className={`${input.className} w-full h-12 px-5`}
        type={input.type}
        placeholder={input.placeholder}
      />
    </div>
  );
}
