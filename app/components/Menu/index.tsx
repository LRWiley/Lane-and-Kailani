import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import CakeIcon from '@material-ui/icons/Cake';
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as React from 'react';
import { useState } from 'react';

import { ScriptTypography } from '../ScriptTypography';
import { ActiveLink } from './ActiveLink';
import { ListItemLink } from './ListItemLink';

export const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <Hidden smDown>
        <AppBar position="static" color="transparent" elevation={0}>
          <Container>
            <Toolbar>
              <Box>
                <ActiveLink href="/us">
                  <ScriptTypography>About us</ScriptTypography>
                </ActiveLink>
              </Box>
              <Box ml={6}>
                <ActiveLink href="/wedding">
                  <ScriptTypography>Wedding</ScriptTypography>
                </ActiveLink>
              </Box>
              <Box ml={6}>
                <ActiveLink href="/events">
                  <ScriptTypography>Events</ScriptTypography>
                </ActiveLink>
              </Box>
              <Box ml={6}>
                <ActiveLink href="/registry">
                  <ScriptTypography>Registry</ScriptTypography>
                </ActiveLink>
              </Box>
              <Box ml={6}>
                <ActiveLink href="/faq">
                  <ScriptTypography>FAQ</ScriptTypography>
                </ActiveLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>
      <Hidden mdUp>
        <Box position="fixed" bottom="0" right="0" margin={3} zIndex={1000}>
          <Fab color="secondary" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </Fab>
        </Box>
        <Drawer anchor="bottom" open={drawerOpen} onClose={closeDrawer}>
          <List>
            <ListItemLink href="/us" onClick={closeDrawer}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="About us" />
            </ListItemLink>
            <ListItemLink href="/wedding" onClick={closeDrawer}>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText primary="Wedding" />
            </ListItemLink>
            <ListItemLink href="/events" onClick={closeDrawer}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemLink>
            <ListItemLink href="/registry" onClick={closeDrawer}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Registry" />
            </ListItemLink>
            <ListItemLink href="/faq" onClick={closeDrawer}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="FAQs" />
            </ListItemLink>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};
