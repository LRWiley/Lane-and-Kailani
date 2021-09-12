import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import * as firstDance from '../../images/first_dance.webp';
import * as kailaniAndLane from '../../images/kailaniandlane.webp';
import * as kittens from '../../images/kittens.webp';
import * as engagement from '../../images/purdue_engagement.webp';
import { Banner } from '../Banner';
import { ScriptTypography } from '../ScriptTypography';
import { Section } from './Section';

export const About = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Banner
        imageSource={kailaniAndLane}
        offset={0.3}
        style={isSmallScreen ? { height: '90vh' } : { minHeight: 650 }}
      />
      <Container maxWidth="md">
        <Box display="flex">
          <Box mx="auto" my={3}>
            <ScriptTypography variant="h1" align="center">
              Kailani &amp; Lane
            </ScriptTypography>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          pt={4}
          mb={isSmallScreen ? 12 : 0}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Section
            title="How we met"
            body="We met through the marching band program while attending Purdue University. Our first date was getting
            ice cream at Silver Dipper. Lane offered to pay, but when Kailani politely refused the first time, he didn't insist
            and she paid for her own. Although she was happy that Lane wasn't driven by gender roles, Lane now pays for all ice
            cream."
            imageSource={firstDance}
            imageAlt="Kailani and Lane at Purdue's Evening of Romance, February 2017"
          />
          <Section
            title="How it's going"
            body="We dated for the rest our time at Purdue, which included several visits to Hawai'i for Christmas, a reunion in Spain while Kailani studied abroad,
            and Lane's graduation in 2019. Kailani accepted a job in Pittsburgh her senior year, and one apocalypse later, we've settled into our new city and 
            added two lovable but mischievous kittens, Darwin and Mochi."
            imageSource={kittens}
            imageAlt="Ellie strikes a pose in front of 14000ft Mt. Rainier"
          />
          <Section
            title="Engagement"
            body="In June 2021, we took a weekend trip out to Indiana for a small family reunion. Due to the pandemic, 
            Kailani had not taken senior photos on Purdue's campus, so we planned to stop by since we were in the area. We met up with 
            some friends to help take our photos. Once we got to the Engingeering Fountain, while Kailani was turned around, Lane got 
            down on one knee and the rest is history."
            imageSource={engagement}
            imageAlt="Lane kissing Kailani at the Engineering foundation."
          />
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box mt={4} mb={6}>
          <Typography variant="subtitle2" align="center">
            Special thanks to Elliot Mantock for all his help and support in designing and hosting
            this website.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
