import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
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
