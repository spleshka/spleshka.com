import React  from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import MainMenu from '../MainMenu';
import logo from '../../logo.svg';

let GlobalHeader = React.createClass({

  render: () => (
    <header style={styles.header}>

      <Link to="/">
        <img src={logo} alt="Logo" style={styles.logo} />
      </Link>

      <Link to="/">
        Spleshka.com
      </Link>

      <MainMenu/>

    </header>
  )

});

let styles = {
  header: {
    margin: '0 auto',
    textAlign: 'center',
  },
  logo: {
    height: '80px',
  }
};

export default Radium(GlobalHeader);
