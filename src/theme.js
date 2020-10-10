import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
    h1:{
      fontWeight: 600,
    },
    h2:{
      fontWeight:600,
    },
    h3:{
      fontWeight:600,
    },
    h4:{
      fontWeight:600,
    }
  },
  
}));

export default theme