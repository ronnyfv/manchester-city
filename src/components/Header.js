import React, { PureComponent } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { CityLogo } from './shared/Icons';

class Header extends PureComponent {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          padding: '10px 0',
          boxShadow: 'none',
          borderBottom: '2px solid #00285e',
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo link linkTo="/" width="70px" height="70px" />
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">Team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">Matches</Button>
          </Link>
          <Link to="/internal">
            <Button color="inherit">Internal</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
