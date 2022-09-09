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

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  password: yup.string().required("Password is required"),
});

export const signupSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/, "Only letters")
    .min(6, "minium of six letters")
    .required("your full name is required"),
  role: yup.string().required("role is required"),
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
