import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import * as React from 'react';

import { ScriptTypography } from '../ScriptTypography';
import { QA } from './QA';

export const FAQ = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Container>
        <Box
          pt={4}
          mb={isSmallScreen ? 12 : 0}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <ScriptTypography align="center" variant="h2">
            Frequently Asked Questions
          </ScriptTypography>
          <Typography align="center">
            Click on the question to see the answer. If you have a question that isn&apos;t listed
            here, email us at KailaniandLane@gmail.com.
          </Typography>
        </Box>
      </Container>
      {/*General Questions*/}
      <Container>
        <Box>
          <List>
            <QA
              question="Do I need to be vaccinated?"
              answer={
                <>
                  Please refer to Hawai&apos;i&apos;s DOH website (
                  <Link href="https://hawaiicovid19.com/travel/travel-overview/" target="_blank">
                    link
                  </Link>
                  ) for the latest travel guidelines regardless of status. As for the wedding
                  itself, Hawaii&apos;s hosptials are currently at capacity capacity with Coivd
                  patients, spiking to nearly three times the number of cases from last year which
                  is largely attributed to a mass influx of tourists. It is too early to early to
                  know what things will look like next summer, however, we reserve the right to
                  require our guests to be vcaccinated if cases remain high or spike again - even if
                  local local government does not make that call. If this becomes a requirement, we
                  will notify all all RSVP&apos;d guests with enough time to get fully vaccinated
                  before traveling. All will be expected to follow local and federal guidelines for
                  covid safety during our event and throughout their travels. We highly encourage
                  you to consider not only the health risks, but also the financial risk if you
                  choose to book your travels and do not intend to be vaccinated by next July.
                </>
              }
              startOpen
            />
            <QA
              question="What are some things I should keep in mind as a visitor to the islands?"
              answer={
                <>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Brush up on your Hawaiian history. Hawai'i has a rich culture and a long and
              complicated history with colonialism and its statehood. The more you know, the more you
              can appreciate the land and its people. Bishop Museum and 'lolani Palace are great
              places to work into your visit to learn more."
                    ></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Link href="http://hbs.bishopmuseum.org/endangered/" target="_blank">
                        <ListItemText primary="Leave wildlife alone. Especially turtles and seals."></ListItemText>
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Leave places cleaner than you found them. This includes biodegradable food items." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Do not geotag, Geotagging has caused many local hotspots to become overcrowded."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Use reef-safe sunscreen. (And PLEASE wear sunscreen!)"></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Shop local! As you get out of Waikiki, there will be many food and souvenir options that will be runby locals instead of chains."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="If you are in reefy areas, do not stand/step on the reef/coral. This will harm the microscopic lifeforms that keep the reef alive."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Never turn your back on the ocean."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Recognize that not everyone will be happy about tourism. Remember that local hospitality is not owned to you, no matter how much your're spending to be here."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Stay on marked trails when hiking. At best, trailblazing harms local wildlife and casuses erosion. At worst, you end up on the news."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Obey all posted signs and warnings concerning currents, Man-O-Wars, trails, sacred sites, etc."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Hawai'i has suffered a lot lately from economic hardships due to Covid and overcrowding and resource strains from a mass influx of tourism. Please be mindful of how your presence and actions affect the local population and always show respect to the aldn and the people."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon style={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Consider donating to local charities. In fact, we would prefer you do this than send us a gift if it's within your means."></ListItemText>
                  </ListItem>
                </>
              }
            />
            <QA
              question="What island is the wedding on?"
              answer="O'ahu. Please book your flights to HNL"
            />
            <QA
              question="Where should I stay?"
              answer="Most hotels are located in Waikiki, which is where you will also find activities like surf lessons, outrigger rides, gift shops, and nightlife. Waikiki is also well
            connected to public bus routes and tourist shuttles. There are other lodging options across the island as well and prices will vary by location and proximity to the beach. Airbnb is available but be aware that they may be operating illegally."
            />
            <QA
              question="Should I rent a car?"
              answer="Yes. There will not be direct transporation to our venue and your own car will be extremely useful for getting to hikes, beaches, and other locations away from where
            you stay. It is well worth your while to get out of Waikiki and explore other areas. Unless you are using the car for mulitple people, a smaller car will be easier to maneuver into Hawa'i's
            tight parking spaces. Uber/Taxis are available but are much less cost efficient in most cases."
            />
            <QA
              question="When should I book everything?"
              answer="Lodging should be booked as soon as possible as hotels and rental homes tend to fill quickly. Flights should generally be booked at least 6 weeks in advance, but can be
                      booked sooner. Keep in mind your RSVP is due about 9 weeks before the wedding day."
            />
            <QA
              question="Should I bring my own beach towels, snorkel gear, etc?"
              answer="That really depends on how much luggage space you have. You'll be able to find cheap-ish beach towels and snorkeling gear at most ABC shops and you're more than
                      welcome to donate any gear you get to Al and Kathleen when you leave if you don't have space for it."
            />
            <QA
              question="What kind of hiking shoes should I bring?"
              answer="Chocos are very popular as are reef-walkers and similar types of shoes. Some hikes can get very muddy and Hawaiian red-dirt does NOT wash out. Bring hiking clothes/gear
                      that you don't mind getting permanently dirty if you plan to do lots of hiking."
            />
            <QA
              question="Do I need a passport?"
              answer="No, this is still the United States *eyeroll*. However, if you haven't traveled in a while, make sure your ID has been updated to include the gold star."
            />
            <QA
              question="How long should I stay in Hawai'i?"
              answer="Assuming you don't have work or budget constraints, 7-10 days is a good amount of time to fit in relaxation, sight-seeing, and adventure. There will be opportunities to
                      get together with the bride, groom, and their families the week of the wedding as well as possibly a farewell brunch the day after (details TBD)."
            />
            <QA
              question="How do I RSVP?"
              answer="We are still finalizing RSVP details (website, plus ones, etc). When you receive your official invitation, an RSVP option will be 
              available on this website."
            />
            <QA
              question="What's the dress code?"
              answer="Dress code is semi-formal/nice aloha wear."
            />
            <QA
              question="What's for dinner?"
              answer="Dinner will be served buffet style with multiple entree and side options. There will be a vegetarian option. The exact menu is TBD."
            />
            <QA
              question="Do I get a plus one?"
              answer="Unfortunately, we do not have the space or resources to offer a plus one to everyone while still having room for all the friends and family
              we want to see. If we have reserved an extra seat for you, it will show up when you enter your name
              to RSVP. If you would like to bring someone with you for the vacation portion of your stay, that is entirely up to you."
            />
            <QA
              question="Are my children invited?"
              answer="Your well-behaved, appropriately supervised children are welcome to attend. There should be RSVP space allotted for them if we are expecting you to bring them. If that
                      option does not show up for you and it should have, please let us know. Please note there will not be special dinner options for picky eaters and you are not allowed to
                      bring in outside food."
            />
            <QA
              question="What's the venue parking situation?"
              answer="There is ample free parking in the lot in front of the ballrooms."
            />
            <QA
              question="When should I arrive?"
              answer="Guests may start arriving about 30 minutes before the ceremony."
            />
            <QA
              question="Is the ceremony inside or outside?"
              answer="The ceremony is outside on the 10th tee (signs will be posted to guide you there). There is only seating available for 50 people, so please let immediate family and
                      elderly/disabled guests have priority. Remaining guests may stand to the sides or on the grassway on top of the snack shop (this will make more sense when you see it,
                      don't worry)."
            />
            <QA
              question="Open bar!?"
              answer="Have you met our friends and family? We'd go broke! Cash bar only. Please drink responsibly."
            />
          </List>
        </Box>
        <Box></Box>
      </Container>
    </>
  );
};
