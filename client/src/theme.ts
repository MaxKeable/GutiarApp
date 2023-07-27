import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '6em',
      color: '#fff',
      fontFamily: 'Londrina Outline, cursive',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '5.5em',
      color: '#C17736',
      fontFamily: 'Londrina Outline, cursive',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#fff',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: 1.8,
      color: '#fff',
    },
        body2: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.8,
      color: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0.5rem',
        },
        outlined: {
          border: '2px solid #3f51b5',
        },
        contained: {
          backgroundColor: '#fff',
          color: 'black',
          fontSize: "1.1rem",
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'grey',
          },
        },
        text: {
          color: '#fff',
          fontSize: "1.1rem",
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'grey',
          },
        },
      },
    },
  },
});

export default theme;
