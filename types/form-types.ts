export type InputType = {
  type: string;
  id?: string;
  placeholder?: string;
  className?: string;
  elementType: string;
  name: string;
  label?: string;
  note?: string;
  value?: string | number;
  disabled?: boolean;
  options?: Array<{ value: string; text: string }>;
};

export type adminProductFormType = {
  productImage: string;
  description: string;
  country: string;
  alcoholVolume: string;
  size: string;
  price: number;
  title: string;
  type: string;
  date: string;
  author: {
    name: string;
    email: string;
  };
};

export type cocktailFormType = {
  cocktailImage: string;
  instructions: string;
  ingredients: string;
  title: string;
  date: string;
  author: {
    name: string;
    email: string;
  };
};

export type policyFormType = {
  date: string;
  policy: string;
  title: string;
  author: {
    name: string;
    email: string;
  };
};
