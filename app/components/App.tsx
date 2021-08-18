import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadScript } from '@react-google-maps/api';
import * as React from 'react';
import GithubCorner from 'react-github-corner';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import { useCustomTheme } from '../hooks/useCustomTheme';
import { About } from './About';
import { FAQ } from './FAQ';
import { Menu } from './Menu';
import { Registry } from './Registry';
import { ServiceWorkerRegistration } from './ServiceWorkerRegistration';
import { Wedding } from './Wedding';

const usePaperStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const App = () => (
  <ParallaxProvider>
    <ThemeProvider theme={useCustomTheme()}>
      <LoadScript googleMapsApiKey="AIzaSyApT_xNp9ePgFYEfdlpw_JJXZG70U1MzXM">
        <Paper classes={usePaperStyles()} elevation={0} square>
          <Router>
            <Menu />
            <Switch>
              <Route exact path="/">
                <Redirect to="/us" />
              </Route>
              <Route exact path="/us">
                <About />
              </Route>
              <Route exact path="/wedding">
                <Wedding />
              </Route>
              <Route exact path="/registry">
                <Registry />
              </Route>
              <Route exact path="/faq">
                <FAQ />
              </Route>
              <Route path="*">
                <Container maxWidth="sm">
                  <Typography variant="h1">404</Typography>
                  <Typography gutterBottom>
                    Sorry that page doesn&apos;t exist! Blame the developers!
                  </Typography>
                </Container>
              </Route>
            </Switch>
          </Router>
          <GithubCorner target="_blank" href="https://github.com/LRWiley/Lane-and-Kailani" />
          <ServiceWorkerRegistration src="/service-worker.js" hideSnackbar />
        </Paper>
      </LoadScript>
    </ThemeProvider>
  </ParallaxProvider>
);
