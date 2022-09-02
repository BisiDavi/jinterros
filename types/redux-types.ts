export type modalStateType =
  | "form-modal-location"
  | "variation-modal"
  | "form-modal-team"
  | "oauth-premium-modal"
  | "successful-booking-modal"
  | null;

export type UIStateType = {
  modal: modalStateType;
  accordion: string | null;
  apploaded: boolean;
  sidebar: "create-staff" | null;
  mediaUpload: boolean;
};

