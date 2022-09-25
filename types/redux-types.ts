export type policiesStateType =
  | "your-privacy"
  | "strictly-necessary-cookies"
  | "performance-cookies"
  | "targeting-cookies";

export type UIStateType = {
  policies: policiesStateType;
  mobileMenu: boolean;
};

export type FormStateType = {
  resetEditableContent: boolean;
  media: any | null;
};
