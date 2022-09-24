import { useState } from "react";
import ContentEditable from "react-contenteditable";

import type { InputType } from "@/types/form-types";

interface Props {
  content: InputType;
}

export default function EditableContent({ content }: Props) {
  const [html, setHtml] = useState("");

  function handleChange(e: any) {
    setHtml(e.target.value);
  }

  return (
    <div>
      <div className="mb-0 font-normal text-gray-600 text-xl">
        {content.placeholder}
      </div>
      <ContentEditable
        className="w-full border p-4 border-blue-500 rounded-xl h-96 input-border-lighter"
        html={html}
        onChange={handleChange}
      />
    </div>
  );
}
