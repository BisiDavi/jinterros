import * as yup from "yup";

export const shippingformSchema = yup.object({
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
  address1: yup.string().required("Address 1 is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().required("Zip is required"),
  country: yup.string().required("Country is required"),
  shippingOption: yup
    .string()
    .typeError("Shipping Option is required")
    .required("Shipping Option is required"),
});

export const adminOrderFormSchema = yup.object({
  deliveryStatus: yup.string().required("Delivery Status  is required"),
});