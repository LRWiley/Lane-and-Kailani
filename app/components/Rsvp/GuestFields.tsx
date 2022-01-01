import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import { Guest } from '../../models/guest';

enum GuestAttendance {
  Yes = 'Yes',
  No = 'No',
}

type GuestFieldProps = {
  guest: Guest;
  onSetAttend: (attending: boolean) => void;
  onSetPlusOneName: (plusOne: string) => void;
};
export const GuestField = ({ guest, onSetAttend, onSetPlusOneName }: GuestFieldProps) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={isSmallScreen ? 'space-evenly' : 'left'}
      border={isSmallScreen ? 1 : 0}
      borderRadius={20}
      borderColor="primary.main"
    >
      <Box
        display="flex"
        flexWrap="no-wrap"
        justifyContent={isSmallScreen ? 'center' : 'space-evenly'}
        p={3}
      >
        <Box
          display="flex"
          p={3}
          paddingBottom={0}
          m={2}
          borderBottom={2}
          borderColor="primary.main"
        >
          <Typography align="center" variant="h5">
            {guest.firstName} {guest.lastName}
          </Typography>
        </Box>
        <Box p={3} justifyContent="center">
          <FormControl>
            <FormLabel>Attending</FormLabel>
            <RadioGroup
              id="attendance-radio-group"
              defaultValue={GuestAttendance.Yes}
              row
              onChange={(e) => onSetAttend(e.target.value === GuestAttendance.Yes)}
            >
              <FormControlLabel
                control={<Radio />}
                id="attending-yes-rad"
                label="Yes"
                value={GuestAttendance.Yes}
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                id="attending-no-rad"
                label="No"
                value={GuestAttendance.No}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box p={3} marginTop={3} display="flex" justifyContent="center">
        {guest.plusOne && (
          <TextField
            id="plus-one-field"
            label="Plus One"
            variant="outlined"
            onChange={(e) => onSetPlusOneName(e.target.value)}
          />
        )}
      </Box>
    </Box>
  );
};
