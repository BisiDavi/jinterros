/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { useAppDispatch } from "@/hooks/useRedux";
import { uploadMedia } from "@/redux/form-slice";
import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function UploadMedia({ input }: Props) {
  const [previewMedia, setPreviewMedia] = useState("");
  const dispatch = useAppDispatch();

  const {
    formState: { errors },
  }: any = useFormContext();

  function onClickHandler(e: any) {
    if (e.target.files) {
      const imageData = URL.createObjectURL(e.target.files[0]);
      setPreviewMedia(imageData);
      dispatch(uploadMedia(e.target.files[0]));
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
          required
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
