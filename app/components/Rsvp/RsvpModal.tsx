import {
  Box,
  CircularProgress,
  Container,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { Confirmation, Guest, GuestSubmission } from 'app/models/guest';
import * as React from 'react';

import { GuestField } from './GuestFields';

const useCloseButtonStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

enum FacebookGroup {
  Yes = 'Yes',
  No = 'No',
}

type RsvpModalProps = {
  error?: Error;
  loading?: boolean;
  onClose?: () => void;
  onDismissError: () => void;
  onSubmit: (submission: GuestSubmission) => void;
  searchResults?: Guest[];
} & Omit<DialogProps, 'onClose' | 'onSubmit'>;
export const RsvpModal = ({
  error,
  loading,
  onClose,
  onDismissError,
  onSubmit,
  searchResults,
  ...dialogProps
}: RsvpModalProps) => {
  /*const [confirmation, setConfirmation] = React.useState<{ [id: string]: Confirmation }>(
    searchResults.reduce(
      (memo, guest) => ({
        ...memo,
        [guest.userID]: {
          name: `${guest.firstName} ${guest.lastName}`,
          attending: true,
          plusOneName: guest.plusOne ? '' : undefined,
        },
      }),
      {},
    ),
  );*/
  const [comfield, setComField] = React.useState<{
    [id: string]: { attending: boolean; plusOneName?: string };
  }>({});

  const confirmation = React.useMemo<{ [id: string]: Confirmation }>(
    () =>
      searchResults?.reduce(
        (memo, guest) => ({
          ...memo,
          [guest.userID]: {
            name: `${guest.firstName} ${guest.lastName}`,
            attending: comfield[guest.userID]?.attending ?? true,
            plusOneName: comfield[guest.userID]?.plusOneName,
          },
        }),
        {},
      ) ?? {},
    [comfield, searchResults],
  );

  const [email, setEmail] = React.useState('');
  const [facebook, setFacebook] = React.useState(false);
  const [accom, setAccom] = React.useState('');

  function handleAttending(userID: string, attending: boolean) {
    setComField({ ...comfield, [userID]: { ...comfield[userID], attending } });
  }
  function handlePlusOne(userID: string, plusOneName: string) {
    setComField({ ...comfield, [userID]: { ...comfield[userID], plusOneName } });
  }

  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <Dialog
      {...dialogProps}
      onClose={onClose}
      fullScreen={
        useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm')) ||
        dialogProps.fullScreen === true
      }
    >
      <DialogTitle disableTypography>
        <Typography variant="h4" gutterBottom>
          <em>RSVP</em>
        </Typography>
        {error != null && (
          <Alert severity="error" onClose={onDismissError}>
            <AlertTitle>Oops! We encountered an error!</AlertTitle>
            <Typography>{error.message}</Typography>
          </Alert>
        )}
        <IconButton classes={useCloseButtonStyles()} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Container>
        <DialogContent>
          <FormGroup>
            <FormLabel>
              1. Will you be attending on 07/08/2022? Please respond for each person below.
            </FormLabel>
          </FormGroup>
          {searchResults?.map((result) => (
            <Box p={2} key={result.userID}>
              <GuestField
                guest={result}
                onSetAttend={(attending) => handleAttending(result.userID, attending)}
                onSetPlusOneName={(plusOne) => handlePlusOne(result.userID, plusOne)}
              />{' '}
            </Box>
          ))}
          <Box p={3}>
            <DialogContentText>
              2. Please provide a primary email address so we can notify you if there are any
              changes or updates. If no one in your party will be attending, you may enter N/A.
            </DialogContentText>
            <TextField
              fullWidth
              label="Email"
              required
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box p={3}>
            <DialogContentText>
              3. Are you interested in being added to an unofficial Facebook group with other guests
              to coorindate personal activites, hotels, etc.? (All official wedding communication
              will be sent to your provided email.)
            </DialogContentText>
            <Box display="flex" justifyContent={isSmallScreen ? 'space-evenly' : 'left'}>
              <FormControl>
                <RadioGroup
                  row
                  //defaultValue={FacebookGroup.No}
                  onChange={(e) => setFacebook(e.target.value === FacebookGroup.Yes)}
                >
                  <FormControlLabel
                    control={<Radio />}
                    id="facebook-yes-radio"
                    label="Yes"
                    value={FacebookGroup.Yes}
                  ></FormControlLabel>
                  <FormControlLabel
                    control={<Radio />}
                    id="facebook-yes-radio"
                    label="No"
                    value={FacebookGroup.No}
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box p={3}>
            <DialogContentText>
              4. Will you require any special accommodations? (Ex. highchair, dietary restrictions,
              additional emails, etc.)
            </DialogContentText>
            <TextField
              fullWidth
              label="Accommodations"
              multiline
              rows={2}
              variant="outlined"
              value={accom}
              onChange={(e) => setAccom(e.target.value)}
            />
          </Box>
        </DialogContent>
      </Container>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          startIcon={loading ? <CircularProgress size={20} /> : <PlayArrowIcon />}
          disabled={loading}
          onClick={() =>
            onSubmit({ confirmation: Object.values(confirmation), email, facebook, accom })
          }
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
