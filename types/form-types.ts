export type InputType = {
  type: string;
  placeholder?: string;
  className?: string;
  elementType: string;
  name: string;
  label?: string;
  note?: string;
  value?: string | number;
  options?: Array<{ value: string; text: string }>;
};
