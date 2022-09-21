import * as yup from "yup";

export const signinSchema = yup.object({
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  password: yup.string().min(6).required("Password is required"),
});

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "minium of three letters")
    .matches(/^[a-zA-Z_ ]*$/, "Only letters")
    .required("your first name is required"),
  lastName: yup
    .string()
    .min(3, "minium of three letters")
    .matches(/^[a-zA-Z_ ]*$/, "Only letters")
    .required("your last name is required"),
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  password: yup.string().min(6).required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
