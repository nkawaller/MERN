import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans', 'sans-serif']
    },
    overrides: {
    MuiButton: {
        root: {

        borderRadius: '0px',
        }
    }

    }
});

export default theme;