/* eslint-disable react-hooks/exhaustive-deps */
import { useFormContext } from "react-hook-form";
import { memo, useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

import type { InputType } from "@/types/form-types";

interface Props {
  content: InputType;
}

function EditableContentComponent({ content }: Props) {
  const [html, setHtml] = useState("");

  const { setValue } = useFormContext();

  useEffect(() => {
    if (html) {
      setValue(content.name, html);
    }
  }, [html]);

  function handleChange(e: any) {
    setHtml(e.target.value);
  }

  return (
    <div>
      <div className="mb-0 font-normal text-gray-600 text-xl">
        {content.placeholder}
      </div>
      <ContentEditable
        className="w-full border p-4 py-0 border-blue-500 rounded-xl min-h-400 input-border-lighter"
        html={html}
        onChange={handleChange}
      />
    </div>
  );
}

const EditableContent = memo(EditableContentComponent);

export default EditableContent;
