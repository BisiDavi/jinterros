/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import type { InputType } from "@/types/form-types";
import useMediaUpload from "@/hooks/useMediaUpload";
import { useAppSelector } from "@/hooks/useRedux";

interface Props {
  input: InputType;
}

export default function UploadMedia({ input }: Props) {
  const [media, setMedia] = useState(null);
  const [previewMedia, setPreviewMedia] = useState("");
  const { uploadImage } = useMediaUpload();
  const { uploadMediaStatus } = useAppSelector((state) => state.form);

  const {
    setValue,
    formState: { errors },
  }: any = useFormContext();

  useEffect(() => {
    if (input.name === uploadMediaStatus && media) {
      uploadImage(media).then((response) => {
        setValue(input.name, response.data.secure_url);
      });
    }
  }, [uploadMediaStatus]);

  function onClickHandler(e: any) {
    if (e.target.files) {
      const imageData = URL.createObjectURL(e.target.files[0]);
      setPreviewMedia(imageData);
      setMedia(e.target.files[0]);
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
