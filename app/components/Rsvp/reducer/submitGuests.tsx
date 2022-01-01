import { Confirmation, GuestSubmission } from 'app/models/guest';

import { RsvpActions, RsvpActionTypes } from './actions';

const addGuests = async (
  confirmation: Confirmation[],
  email: string,
  facebook: boolean,
  accom: string,
) => {
  const body = JSON.stringify(
    confirmation.map((c) => ({
      'Guest Name': c.name,
      Attending: !!c.attending,
      'Plus One': c.plusOneName?.trim(),
      Email: email,
      Facebook: !!facebook,
      Accommodations: accom,
    })),
  );

  return await fetch('https://sheet.best/api/sheets/0d994586-17f9-4a3e-8fea-c11d827b08c0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  });
};

export async function* submitGuests(submit: GuestSubmission): AsyncGenerator<RsvpActions> {
  yield { type: RsvpActionTypes.Loading, payload: true };
  try {
    await addGuests(submit.confirmation, submit.email, submit.facebook, submit.accom);
    yield { type: RsvpActionTypes.HideRsvpModal };
    yield { type: RsvpActionTypes.ShowSubmitSuccessSnack };
  } catch (payload) {
    if (payload instanceof Error) {
      yield { type: RsvpActionTypes.Error, payload };
    } else if (typeof payload === 'string') {
      yield { type: RsvpActionTypes.Error, payload: new Error(payload) };
    }
  }
  yield { type: RsvpActionTypes.Loading, payload: false };
  return;
}
