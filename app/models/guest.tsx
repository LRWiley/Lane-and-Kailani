export type Guest = {
  userID: string;
  firstName: string;
  lastName: string;
  partyNum: number;
  plusOne: boolean;
};

export type Confirmation = {
  name: string;
  attending: boolean;
  plusOneName?: string;
};

export type GuestSubmission = {
  confirmation: Confirmation[];
  email: string;
  facebook: boolean;
  accom: string;
};
