/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import type { InputType } from "@/types/form-types";

interface Props {
  input: InputType;
}

export default function UploadMedia({ input }: Props) {
  const [media, setMedia] = useState("");

  console.log("media", media);

  function onClickHandler(e: any) {
    if (e.target.files) {
      const imageData = URL.createObjectURL(e.target.files[0]);
      setMedia(imageData);
      // return uploadMedia(e.target.files[0]);
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
      {media && <img src={media} alt="preview media" className="mt-5 w-2/3" />}
    </div>
  );
}
