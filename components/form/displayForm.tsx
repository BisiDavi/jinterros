import { InputType } from "@/types/form-types";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
import RadioInput from "@/components/form/RadioInput";

export default function displayForm(input: InputType) {
  switch (input.elementType) {
    case "input":
      return <Input input={input} />;
    case "checkbox":
      return <Checkbox input={input} />;
    case "radio":
      return <RadioInput input={input} />;
  }
}
