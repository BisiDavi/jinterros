import { InputType } from "@/types/form-types";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
import RadioInput from "@/components/form/RadioInput";
import Textarea from "@/components/form/Textarea";
import SelectCountry from "@/components/form/SelectCountry";
import UploadMedia from "@/components/form/UploadMedia";
import EditableContent from "@/components/form/EditableContent";
import Select from "@/components/form/Select";

export default function displayForm(input: InputType, data?: any) {
  switch (input.elementType) {
    case "input":
      return <Input input={input} data={data} />;
    case "checkbox":
      return <Checkbox input={input} data={data} />;
    case "radio":
      return <RadioInput input={input} data={data} />;
    case "textarea":
      return <Textarea input={input} data={data} />;
    case "country":
      return <SelectCountry content={input} data={data} />;
    case "media":
      return <UploadMedia input={input} data={data} />;
    case "markdown":
      return <EditableContent content={input} data={data} />;
    case "select":
      return <Select content={input} data={data} />;
  }
}
