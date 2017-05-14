import React  from 'react';

let styles = {
  footer: {
    padding: '10px',
    textAlign: 'center'
  }
};

let GlobalFooter = React.createClass({

  render: () => (
    <footer style={styles.footer}>
      (c) Copyleft
    </footer>
  )

});

export default GlobalFooter;
