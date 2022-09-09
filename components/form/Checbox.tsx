import { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function Checkbox({ input }: Props) {
  return (
    <div className="w-full my-2 text-xs font-thin text-gray-400">
      <label htmlFor={input.name}>
        <input
          id={input.name}
          className="accent-orange-400  mr-2"
          type={input.type}
        />
        {input.placeholder}
      </label>
    </div>
  );
}
