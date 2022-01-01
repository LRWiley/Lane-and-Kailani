import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GoogleMap } from '@react-google-maps/api';
import * as React from 'react';

import * as alexa from '../../images/headshots/alexa.webp';
import * as angie from '../../images/headshots/angie.webp';
import * as ducky from '../../images/headshots/ducky.webp';
import * as fabio from '../../images/headshots/fabio.webp';
import * as heisenberg from '../../images/headshots/heisenberg.webp';
import * as hugs from '../../images/headshots/hugs.webp';
import * as juila from '../../images/headshots/juila.webp';
import * as kaylan from '../../images/headshots/kaylan.webp';
import * as lauryn from '../../images/headshots/lauryn.webp';
import * as logan from '../../images/headshots/logan.webp';
import * as nala from '../../images/headshots/nala.webp';
import * as scoots from '../../images/headshots/scoots.webp';
import * as sirena from '../../images/headshots/sirena.webp';
import * as sree from '../../images/headshots/sree.webp';
import * as KoolauVenue from '../../images/Kaneohe-Bay.jpg';
import { Banner } from '../Banner';
import { Countdown } from '../Countdown';
import { ScriptTypography } from '../ScriptTypography';
import { PartyMember } from './PartyMember';

const useGetMapStyles = (): React.CSSProperties => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return { width: '100%', height: isSmallScreen ? '75vh' : 500 };
};

export const Wedding = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Banner
        offset={0}
        style={isSmallScreen ? { height: '50vh' } : { minHeight: 600 }}
        imageSource={KoolauVenue}
      />
      <Container maxWidth="md">
        <Countdown toDate={new Date(2022, 6, 8, 16, 0, 0)} />
      </Container>
      <Container>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={4}>
          <Box mb={2} textAlign="center" px={1} width={isSmallScreen ? '100%' : '40%'}>
            <ScriptTypography align="center" variant="h2">
              The Ko&apos;olau Ballrooms &amp; Conference Center
            </ScriptTypography>
            <ScriptTypography align="center" variant="h3" color="textSecondary" gutterBottom>
              <em>7/08/22 @ 4pm</em>
            </ScriptTypography>
            <Typography variant="body1" gutterBottom>
              Both our ceremony and reception will be held at the following address:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="https://tinyurl.com/2wm9cr92" target="_blank">
                45-550 Kionaole Road
                <br />
                Kane&apos;ohe, HI 96744
              </Link>
            </Typography>
          </Box>
          <Box px={1} width={isSmallScreen ? '100%' : '40%'}>
            <GoogleMap
              options={{
                mapTypeId: google.maps.MapTypeId.HYBRID,
                streetViewControl: false,
              }}
              center={{
                lat: 21.374320786959828,
                lng: -157.79390660789844,
              }}
              zoom={15}
              mapContainerStyle={useGetMapStyles()}
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box mt={4}>
          <ScriptTypography variant="h2" align="center">
            Bridemaids
          </ScriptTypography>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            <Box width="16.5rem">
              <PartyMember
                name="Sirena Linton"
                description="I'm doing my best"
                location="Kane'ohe, Hawai'i"
                imgSrc={sirena}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name="Kaylan Conner"
                description="And they were roommates. . ."
                location="Chicago, Illinois"
                imgSrc={kaylan}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name="Julia Betz"
                description="Oh my god they were roommates!"
                location="Berkeley, California"
                imgSrc={juila}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name="Sree Kutty"
                description="Highschool sweetheart"
                location="Kane'ohe, Hawai'i"
                imgSrc={sree}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name="Alexa Anderson"
                description="Friendly neighborhood astrophysicist"
                location="Kailua, Hawai'i"
                imgSrc={alexa}
              />
            </Box>
          </Box>
        </Box>
        <Box mt={4}>
          <ScriptTypography variant="h2" align="center">
            Groomsmen
          </ScriptTypography>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            <Box width="16.5rem">
              <PartyMember
                name="Angie Hubert"
                description="The Best of Men"
                location="South Bend, Indiana"
                imgSrc={angie}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name='Austen "Scoots" Bowen'
                description="The purrrfect roommate"
                location="Brazil, Indiana"
                imgSrc={scoots}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name='TJ "Heisenberg" Morley'
                description="The secert ingredient is crime"
                location="Ferndale, Michigan"
                imgSrc={heisenberg}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name='Zach "Ducky" Greenberg'
                description="His uncle works at Nintendo"
                location="Arlington Heights, Illinois"
                imgSrc={ducky}
              />
            </Box>
            <Box width="16.5rem">
              <PartyMember
                name='Robyn "Hugs" Bylsma'
                description="Love me"
                location="Cleveland, Ohio"
                imgSrc={hugs}
              />
            </Box>
          </Box>
        </Box>
        <Box mt={4} mb={6}>
          <ScriptTypography variant="h2" align="center">
            Flower Squad
          </ScriptTypography>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            <Box mx="auto" width="16.5rem">
              <PartyMember
                name="Logan Wiley"
                description="Assistant to the flower girl"
                location="Geneva, Illinois"
                imgSrc={logan}
              />
            </Box>
            <Box mx="auto" width="16.5rem">
              <PartyMember
                name="Nala Dickson"
                description="World's cutest flower girl"
                location="Geneva, Illinois"
                imgSrc={nala}
              />
            </Box>
            <Box mx="auto" width="16.5rem">
              <PartyMember
                name="Lauryn Wiley"
                description="Assistant to the assistant to the flower girl"
                location="Geneva, Illinois"
                imgSrc={lauryn}
              />
            </Box>
          </Box>
        </Box>
        <Box mt={4} mb={6}>
          <ScriptTypography variant="h2" align="center">
            Officiant
          </ScriptTypography>
          <Box display="flex">
            <Box mx="auto" width="16.5rem">
              <PartyMember
                name='Chris "Fabio" Jacobus'
                description="Is actually an airplane."
                location="Kent, Washington"
                imgSrc={fabio}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box mt={4} mb={6}>
          <Typography variant="subtitle2" align="center">
            Special thanks to Elliott Mantock for all his help and support in designing and hosting
            this website.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
