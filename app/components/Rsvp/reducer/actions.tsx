import { GuestSubmission } from 'app/models/guest';

export enum RsvpActionTypes {
  ShowSearchModal,
  HideSearchModal,
  ShowRsvpModal,
  HideRsvpModal,
  SearchGuest,
  SubmitGuests,
  ShowSubmitSuccessSnack,
  HideSnack,
  Error,
  Loading,
  ClearGuests,
}

type ShowSearchModal = { type: RsvpActionTypes.ShowSearchModal };
type HideSearchModal = { type: RsvpActionTypes.HideSearchModal };
type ShowRsvpModal = { type: RsvpActionTypes.ShowRsvpModal };
type HideRsvpModal = { type: RsvpActionTypes.HideRsvpModal };
type SearchGuest = {
  type: RsvpActionTypes.SearchGuest;
  payload: { firstName: string; lastName: string };
};
type SubmitGuests = { type: RsvpActionTypes.SubmitGuests; payload: GuestSubmission };
type ShowSubmitSuccessSnack = { type: RsvpActionTypes.ShowSubmitSuccessSnack };
type HideSnack = { type: RsvpActionTypes.HideSnack };
type ActionError = { type: RsvpActionTypes.Error; payload?: Error };
type ActionLoading = { type: RsvpActionTypes.Loading; payload?: boolean };
type ClearGuests = { type: RsvpActionTypes.ClearGuests };

export type RsvpActions =
  | ShowSearchModal
  | HideSearchModal
  | ShowRsvpModal
  | HideRsvpModal
  | SearchGuest
  | SubmitGuests
  | ShowSubmitSuccessSnack
  | HideSnack
  | ActionError
  | ActionLoading
  | ClearGuests;
