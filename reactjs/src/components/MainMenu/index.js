import React  from 'react'
import { Link } from 'react-router-dom'

let MainMenu = React.createClass({

  render: () => (
    <div className="main-menu">
      <Link to="/">Home</Link>
      <Link to="/drupal">Drupal</Link>
      <Link to="/about">About</Link>
    </div>
  )

});

export default MainMenu;
