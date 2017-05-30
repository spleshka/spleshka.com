import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './Theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './components/GlobalElements/Header';
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  render = () => (
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
