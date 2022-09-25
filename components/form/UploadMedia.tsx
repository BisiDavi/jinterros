/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useFormContext } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { uploadMedia, uploadPreviewMedia } from "@/redux/form-slice";
import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function UploadMedia({ input }: Props) {
  const { previewMedia } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const {
    setValue,
    formState: { errors },
  }: any = useFormContext();

  function onClickHandler(e: any) {
    if (e.target.files) {
      const imageData = URL.createObjectURL(e.target.files[0]);
      setValue(input.name, true);
      dispatch(uploadPreviewMedia(imageData));
      dispatch(uploadMedia(e.target.files));
    }
  }

  return (
    <div className="form-control flex flex-col">
      <label htmlFor={input.name} className="h-12 w-full my-4 relative">
        {input.placeholder}
        <input
          id={input.name}
          className={`${input.className} font-normal py-2 w-full h-12 px-5 placeholder-gray-300`}
          type="file"
          onChange={onClickHandler}
          placeholder={input.placeholder}
        />
      </label>
      <p className="text-red-500 p-0  mt-2 text-xs">
        {errors[input.name]?.message}
      </p>
      {previewMedia && (
        <img src={previewMedia} alt="preview media" className="mt-5 w-2/3" />
      )}
    </div>
  );
}
