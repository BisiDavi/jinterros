import { InputType } from "@/types/form-types";
import Input from "@/components/form/Input";

export default function displayForm(input: InputType) {
  switch (input.elementType) {
    case "input":
      return <Input input={input} />;
  }
}
