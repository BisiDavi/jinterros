import * as yup from "yup";

export const adminProductSchema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .typeError("price must be a number")
    .positive()
    .required("Price is required"),
  size: yup.string().required("Size is required"),
  alcoholVolume: yup.string().required("Alcohol Volume is required"),
  country: yup.string().required("Country is required"),
  description: yup.string().required("Product Description is required"),
  productImage: yup.string().required("Image is required"),
});

export const cocktailSchema = yup.object({
  title: yup.string().required("Title is required"),
  ingredients: yup.string().required("Ingredients is required"),
  instructions: yup.string().required("Instructions is required"),
  cocktailImage: yup.string().required("Image is required"),
});

export const policySchema = yup.object({
  title: yup.string().required("Title is required"),
  policy: yup.string().required("Policy is required"),
});
