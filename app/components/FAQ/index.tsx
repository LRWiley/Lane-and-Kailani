import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import * as KoolauVenue from '../../images/Kaneohe-Bay.jpg';
import { Section } from '../About/Section';
import { Banner } from '../Banner';

export const FAQ = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Banner
        offset={0}
        style={isSmallScreen ? { height: '50vh' } : { minHeight: 650 }}
        imageSource={KoolauVenue}
      />
      <Container>
        <Box>
          <Typography gutterBottom align="center">
            Here lies our future frequently asked questions page.
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box>
          <Section
            title="Do I need to be vaccinated?"
            body="Our understanding of Covid, the vaccine, and the new
            variants is changing daily as new data is made available and guidelines are subject to
            change. Currently, Hawai'i travel restrictions do not apply to fully vaccinated
            individuals. Those who are not vaccinated will need to take a Covid test prior to their
            flight and follow Hawaii DOH guidelines (details here - link to doh travel). At this
            time, we will not be requiring guests to be vaccinated to attend our ceremony and
            reception. We do, however, expect all guests to respect the health and safety of others
            - both at our event and throughout your travels - by adhering to local, federal, and CDC
            guidelines as they apply to you (yes, they DO apply to you) including masks and social
            distancing. We will continue to monitor the Covid situation in Hawaii and nationally and
            may choose to impose our own restrictions even if the state does not if we believe there
            is increased risk by not doing so."
          />
          <Section
            title="Where should I stay?"
            body="Most hotels are located in Waikiki, which is where you will also find activities like surf lessons, outrigger rides, gift shops, and nightlife. Waikiki is also well
            connected to public bus routes and tourist shuttles. There are other lodging options across the island as well and prices will vary by location and proximity to the beach. Airbnb is available but be aware that they may be operating illegally."
          />
          <Section
            title="Do I need a passport?"
            body="No, this is still the United States *eyeroll*. However, if you haven't traveled in a while, make sure your ID has been updated to include the gold star."
          />
        </Box>
      </Container>
    </>
  );
};
