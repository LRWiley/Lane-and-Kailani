import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import * as crateAndBarrel from '../../images/logos/crate_and_barrel.webp';
import * as target from '../../images/logos/target.webp';

export const Registry = () => (
  <>
    <Container maxWidth="sm">
      <Box pt={8}>
        <Typography gutterBottom align="center">
          Please know that your presence at our wedding is more than enough! However, for friends
          and family who have been asking for gift ideas, we’ve created an online registry with
          these stores:
        </Typography>
      </Box>
    </Container>
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" my={6}>
        <Box maxWidth="11rem" my="auto" py={4} px={1.5}>
          <Link
            target="_blank"
            href="https://www.crateandbarrel.com/gift-registry/lane-wiley-and-kailani-linton/r6351173"
          >
            <img style={{ width: '100%' }} src={crateAndBarrel} />
          </Link>
        </Box>
        <Box maxWidth="11rem" my="auto" py={4} px={1.5}>
          <Link
            target="_blank"
            href="https://www.target.com/gift-registry/gift-giver?registryId=afc50900-05e8-11ec-a5f7-adaf1ca5640c&amp;type=WEDDING&amp;registrant=true"
          >
            <img style={{ width: '100%' }} src={target} />
          </Link>
        </Box>
      </Box>
      <Box mb={10}>
        <Typography gutterBottom align="center">
          Items can be shipped to our home address:
        </Typography>
        <Typography variant="body2" align="center">
          850 Baldwin Street Apt. 136
          <br />
          Pittsburgh, PA 15234
        </Typography>
      </Box>
    </Container>
  </>
);
