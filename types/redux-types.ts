export type policiesStateType =
  | "yourPrivacy"
  | "strictlyNecessaryCookies"
  | "performanceCookies"
  | "targetingCookies";

export type UIStateType = {
  policies: policiesStateType;
};
