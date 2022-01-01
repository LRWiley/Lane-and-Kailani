import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import * as Beach from '../../images/beach.jpg';
import * as EventBeach from '../../images/EventBannerBeach.jpg';
import * as Lighthouse from '../../images/lighthouse.jpg';
import * as Pancakes from '../../images/pancakes.jpg';
import { Banner } from '../Banner';
import { ScriptTypography } from '../ScriptTypography';
import { EventBlock } from './EventBlock';

export const Events = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Banner
        offset={0}
        style={isSmallScreen ? { height: '50vh' } : { minHeight: 600 }}
        imageSource={EventBeach}
      />
      <Container maxWidth="md">
        <Box pt={4} display="flex" flexWrap="wrap" justifyContent="space-around">
          <Box>
            <ScriptTypography align="center" variant="h2">
              Events
            </ScriptTypography>
          </Box>
          <Box p={4}>
            <Typography variant="h5" align="center">
              Other opportunities to meet with the Bride and Groom.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={isSmallScreen ? 'center' : 'space-evenly'}
        >
          <Typography align="center"></Typography>
          <EventBlock
            date="Date: TBD"
            location="Tentatively: Kailua Beach Park"
            picture={Beach}
            activity="Beach BBQ"
            description="Join us for a beach day at one of our favorite spots. Food sitiuation TBA."
          />
          <EventBlock
            date="Date: TBD"
            location="Tentatively: Makapu'u Lighthouse"
            picture={Lighthouse}
            activity="Group Hike"
            description="Come hang out with us on a hike. Meet in the parking lot at time TBD. Low impact trail."
          />
          <EventBlock
            date="Saturday, July 9th, 8 A.M. - ?"
            location="47-115 Kaimalolo Place, Kaneohe"
            picture={Pancakes}
            activity="Post Wedding Brunch"
            description="One last hoorah with the Bride and Groom. Pancakes and mimosas at the Linton house. Bring a swimsuit for the pool."
          />
        </Box>
      </Container>
    </>
  );
};
