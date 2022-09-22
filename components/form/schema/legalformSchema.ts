import * as yup from "yup";

export const legalSchema = yup.object({
  birthYear: yup
    .number()
    .test(
      "birthYear",
      "Must be exactly 4 digits",
      (val: any) => val.toString().length === 4
    )
    .typeError("birth year must be a number")
    .required("birth year is required"),
});