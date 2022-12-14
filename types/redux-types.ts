export type policiesStateType =
  | "your-privacy"
  | "strictly-necessary-cookies"
  | "performance-cookies"
  | "targeting-cookies";

export type UIStateType = {
  policies: policiesStateType;
  mobileMenu: boolean;
  slideCart: boolean;
};

export type FormStateType = {
  resetEditableContent: boolean;
  media: any | null;
  previewMedia: string;
  paymentForm: {
    data: any;
    completed: boolean;
  };
};

export type productCartType = {
  title: string;
  price: number;
  quantity: number;
  img: string;
};

export type cartType = productCartType & {
  amount: number;
};
