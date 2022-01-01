import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import * as React from 'react';

const useCloseButtonStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

type SearchModalProps = {
  error?: Error;
  onClose?: () => void;
  onDismissError: () => void;
  onSearch: (firstName: string, lastName: string) => void;
} & Omit<DialogProps, 'onClose'>;

export const SearchModal = ({
  error,
  onClose,
  onDismissError,
  onSearch,
  ...dialogProps
}: SearchModalProps) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
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
          RSVP Search
        </Typography>
        <FormGroup>
          <FormLabel>Please enter your first and last name to RSVP for your party.</FormLabel>
        </FormGroup>
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
      <DialogContent>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={isSmallScreen ? 'space-evenly' : 'center'}
        >
          <Box p={2}>
            <TextField
              value={firstName}
              id="searchFirstTxt"
              label="First Name"
              autoFocus
              required
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
          <Box p={2}>
            <TextField
              value={lastName}
              id="searchLastTxt"
              label="Last Name"
              required
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => onSearch(firstName, lastName)}>
          Search
        </Button>
      </DialogActions>
    </Dialog>
  );
};
