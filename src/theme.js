import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
   palette: {
      primary: {
         main: yellow[600],
         dark: yellow[500],
      },
      secondary: {
         main: '#333333',
      },
   },
});

export default theme;