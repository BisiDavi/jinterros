export type policiesStateType =
  | "your-privacy"
  | "strictly-necessary-cookies"
  | "performance-cookies"
  | "targeting-cookies";

export type UIStateType = {
  policies: policiesStateType;
  mobileMenu: boolean;
};
