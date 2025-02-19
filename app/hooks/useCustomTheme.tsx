import { createMuiTheme } from '@material-ui/core/styles';
import { useMemo } from 'react';

export const useCustomTheme = () =>
  useMemo(
    () =>
      createMuiTheme({
        spacing: (factor) => `${0.5 * factor}rem`,
        palette: {
          // TODO: play with dark mode but this site is designed for light mode
          type: 'light',
          primary: {
            light: 'rgba(175, 126, 203, 1)',
            main: 'rgba(139, 77, 174, 1)',
            dark: 'rgba(114, 78, 135, 1)',
            contrastText: '#fff',
          },
          secondary: {
            light: 'rgba(150, 168, 161, 1)',
            main: 'rgba(31, 134, 31, 1)',
            dark: 'rgba(45, 92, 45, 1)',
            contrastText: '#fff',
          },
          error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
          },
        },
      }),
    [],
  );
