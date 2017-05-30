//import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    /*textColor: cyan500,*/
  },
  appBar: {
    height: 50,
  },
});

export default muiTheme;
