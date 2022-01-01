import useElmish, { Effects, Reducer } from 'react-use-elmish';

import { fromAsyncIterable } from '../../../effects/fromAsyncIterable';
import { guestList } from '../GuestList';
import { RsvpActions, RsvpActionTypes } from './actions';
import { State } from './state';
import { submitGuests } from './submitGuests';

export const rsvpReducer: Reducer<State, RsvpActions> = (state, action) => {
  //Displaying Search & RSVP Dialogs

  if (
    action.type === RsvpActionTypes.ShowSearchModal ||
    action.type === RsvpActionTypes.HideSearchModal
  ) {
    return [
      { ...state, isSearchOpen: action.type === RsvpActionTypes.ShowSearchModal },
      Effects.none(),
    ];
  }

  if (
    action.type === RsvpActionTypes.ShowRsvpModal ||
    action.type === RsvpActionTypes.HideRsvpModal
  ) {
    return [
      { ...state, isRsvpOpen: action.type === RsvpActionTypes.ShowRsvpModal },
      Effects.none(),
    ];
  }
  //Display & Hide Snackbar

  if (action.type === RsvpActionTypes.ShowSubmitSuccessSnack) {
    return [{ ...state, showSuccessSnack: true }, Effects.none()];
  }
  if (action.type === RsvpActionTypes.HideSnack) {
    return [{ ...state, showSuccessSnack: undefined }, Effects.none()];
  }
  //Searching for Guests

  if (action.type === RsvpActionTypes.SearchGuest) {
    //Error if textfields are empty
    if (action.payload.firstName.trim() === '' || action.payload.lastName.trim() === '') {
      return [
        state,
        Effects.action({
          type: RsvpActionTypes.Error,
          payload: new Error('Please enter a first and last name.'),
        }),
      ];
    }
    const userSearch = guestList.find(
      (guest) =>
        guest.firstName.toLowerCase() === action.payload.firstName.toLowerCase().trim() &&
        guest.lastName.toLowerCase() === action.payload.lastName.toLowerCase().trim(),
    );
    //Error if guest is not found in guestlist
    if (userSearch == null) {
      return [
        state,
        Effects.action({
          type: RsvpActionTypes.Error,
          payload: new Error(
            'No matches found. Please check spelling. For further assistance, email us at KailaniandLane@gmail.com',
          ),
        }),
      ];
    }
    //Returns the user's fullname into guest object. Searches guestList again for all party members.
    const partySearch = guestList.filter((guest) => guest.partyNum === userSearch.partyNum);
    return [
      { ...state, userSearchResult: partySearch },
      Effects.combine<RsvpActions>(
        Effects.action({ type: RsvpActionTypes.ShowRsvpModal }),
        Effects.action({ type: RsvpActionTypes.HideSearchModal }),
      ),
    ];
  }

  //Submitting Guest

  if (action.type === RsvpActionTypes.SubmitGuests) {
    //Validate Email
    if (action.payload.email === '') {
      return [
        state,
        Effects.action({
          type: RsvpActionTypes.Error,
          payload: new Error('Invalid field. Email cannot be empty.'),
        }),
      ];
    }

    //store payload into const
    const confirmation = action.payload.confirmation;
    const email = action.payload.email;
    const facebook = action.payload.facebook;
    const accom = action.payload.accom;
    //Submits Guest
    return [
      state,
      fromAsyncIterable(
        submitGuests({ confirmation: Object.values(confirmation), email, facebook, accom }),
      ),
    ];
  }

  //Error and Loading Handlers
  if (action.type === RsvpActionTypes.Loading) {
    if (action.payload === state.loading) {
      return [state, Effects.none()];
    }
    return [{ ...state, loading: action.payload }, Effects.none()];
  }
  if (action.type === RsvpActionTypes.Error) {
    if (action.payload === state.error) {
      return [state, Effects.none()];
    }
    return [{ ...state, error: action.payload }, Effects.none()];
  }
  //Clearing Guest
  if (action.type === RsvpActionTypes.ClearGuests) {
    return [{ ...state, userSearchResult: [] }, Effects.none()];
  }

  return [state, Effects.none()];
};

export const useRsvpReducer = () =>
  useElmish<Reducer<State, RsvpActions>>(rsvpReducer, () => [
    {
      isSearchOpen: false,
      isRsvpOpen: false,
    },
    Effects.none(),
  ]);
