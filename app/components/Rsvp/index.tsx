import { Box, Snackbar, SnackbarContent, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/styles';
import * as React from 'react';

import { useRsvpReducer } from './reducer';
import { RsvpActionTypes } from './reducer/actions';
import { RsvpButton } from './RsvpButton';
import { RsvpModal } from './RsvpModal';
import { SearchModal } from './SearchModal';

const SuccessSnackbarContent = withStyles({
  root: {
    cololr: '#fff',
    backgroundColor: green[700],
  },
})(SnackbarContent);

export const Rsvp = () => {
  const [state, dispatch] = useRsvpReducer();
  return (
    <>
      <RsvpButton onClick={() => dispatch({ type: RsvpActionTypes.ShowSearchModal })} />
      <SearchModal
        maxWidth="md"
        open={!!state.isSearchOpen}
        error={state.error}
        onClose={() => dispatch({ type: RsvpActionTypes.HideSearchModal })}
        onDismissError={() => dispatch({ type: RsvpActionTypes.Error })}
        onSearch={(firstName, lastName) => {
          dispatch({ type: RsvpActionTypes.SearchGuest, payload: { firstName, lastName } });
        }}
      />
      <RsvpModal
        maxWidth="md"
        open={!!state.isRsvpOpen && state.userSearchResult != null}
        error={state.error}
        onClose={() => {
          dispatch({ type: RsvpActionTypes.HideRsvpModal });
          dispatch({ type: RsvpActionTypes.ClearGuests });
        }}
        onDismissError={() => dispatch({ type: RsvpActionTypes.Error })}
        onSubmit={(payload) => {
          dispatch({ type: RsvpActionTypes.SubmitGuests, payload });
        }}
        searchResults={state.userSearchResult}
      />

      <Snackbar
        open={!!state.showSuccessSnack}
        autoHideDuration={8000}
        onClose={() => dispatch({ type: RsvpActionTypes.HideSnack })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <SuccessSnackbarContent
          message={
            <Box display="flex">
              <Box my="auto" mr={2}>
                <ThumbUpIcon />
              </Box>
              <Box my="auto">
                <Typography>RSVP submitted successfully! Thank you for your response.</Typography>
              </Box>
            </Box>
          }
        />
      </Snackbar>
    </>
  );
};
