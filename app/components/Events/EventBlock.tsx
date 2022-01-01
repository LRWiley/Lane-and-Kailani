import { Box, Theme, useMediaQuery } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type EventBlockProps = {
  date: string;
  location: string;
  picture: string;
  activity: string;
  description: string;
};

export const EventBlock = (eb: EventBlockProps) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Box p={isSmallScreen ? 2 : 4} mb={isSmallScreen ? 12 : 0}>
        <Card style={{ maxWidth: 345 }}>
          <CardMedia component="img" height="150" image={eb.picture}></CardMedia>
          <CardContent>
            <Box p={1}>
              <Typography id="event-title" variant="h5">
                {eb.activity}
              </Typography>
              <Typography id="event-date" variant="subtitle1">
                {eb.date}
              </Typography>
              <Typography id="event-location" variant="subtitle1">
                {eb.location}
              </Typography>
            </Box>
            <Box p={1} alignContent="left">
              <Typography>{eb.description}</Typography>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
};
