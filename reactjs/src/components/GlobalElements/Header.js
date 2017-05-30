import React  from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false
    }
  }

  toggleMenuVisibility = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false
    })
  };

  render = () => (
    <header>

      <AppBar
        title="Spleshka.com"
        onLeftIconButtonTouchTap={this.toggleMenuVisibility}
      />

      <Drawer
        open={this.state.menuVisible}
        onRequestChange={open => this.setState({ menuVisible : open })}
        docked={false}
      >
        <Link to="/">
          <MenuItem onTouchTap={this.handleHideMenu}>Home</MenuItem>
        </Link>

        <Link to="/about">
          <MenuItem onTouchTap={this.handleHideMenu}>About</MenuItem>
        </Link>

      </Drawer>

    </header>
  );
}

export default Header;
