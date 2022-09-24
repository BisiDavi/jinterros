import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function UploadMedia({ input }: Props) {
  return (
    <div className="form-control">
      <label htmlFor={input.name} className="h-12 w-full my-4 relative">
        {input.placeholder}
        <input
          id={input.name}
          className={`${input.className} font-normal py-2 w-full h-12 px-5 placeholder-gray-300`}
          type="file"
          placeholder={input.placeholder}
        />
      </label>
    </div>
  );
}
