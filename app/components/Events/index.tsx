import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import * as Beach from '../../images/beach.jpg';
import * as Boat from '../../images/boat.jpg';
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
            date="Tuesday, July 5th, 1 P.M."
            location="He'eia Pier, Kaneohe Bay"
            picture={Boat}
            activity="Sandbar Adventure"
            description={
              <>
                Sign yourself up here for an afternoon in Kaneohe Bay with us
                <Link href="https://book.kaneohebayoceansports.com/top/products/436f7166-c30e-548d-b63f-aa0aca4c1ee8?_gl=1*920y1v*_ga*ODAwMDIyMDQ0LjE2NDU5Mjc1MzE.*_ga_34MV9T5BFB*MTY0NTkyNzUzMC4xLjEuMTY0NTkyNzU0OS4w&_ga=2.246610884.1751392072.1645927531-800022044.1645927531">
                  via KBOS Action Club
                </Link>
                . Snorkeling, standup paddle boarding, beach volleyball and more! Cost is
                $110/person and lunch is included. This is a non-exclusive event, so first come
                first serve. Kama&apos;aina with ID, enter code LOCAL22 at checkout. See KBOS
                website for further details. BYOB, cans only.
              </>
            }
          />
          <EventBlock
            date="Saturday, July 9th, 8 A.M."
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
