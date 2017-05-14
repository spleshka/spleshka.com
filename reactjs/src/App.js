import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import GlobalFooter from './components/GlobalFooter';
import GlobalHeader from './components/GlobalHeader';
import FrontPage from './pages/FrontPage';
import DrupalPage from './pages/DrupalPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render = () => (
    <Router>
      <div>
        <Button>Test</Button>
        <GlobalHeader />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/drupal" exact={true} component={DrupalPage} />
          <Route path="/about" exact={true} component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalFooter />
      </div>
    </Router>
  );
}

export default App;
