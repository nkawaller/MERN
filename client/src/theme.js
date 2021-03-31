import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
    primary: {
      main: '#db7093',
    },
    secondary: {
      main: '#000',
    },
  },
    typography: {
        fontFamily: ['Open Sans', 'sans-serif']
    },
    overrides: {
    MuiButton: {
        root: {

        borderRadius: '0px',
        }
    },
    MuiTextField: {
        root: {
            color: 'palevioletred'
        }
    }

    }
});

export default theme;