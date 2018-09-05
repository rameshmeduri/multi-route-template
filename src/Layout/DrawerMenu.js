
import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Toolbar, Typography, withStyles } from '@material-ui/core';

import NavigationMenu from './NavigationMenu';

const styles = (theme) => ({
  drawerRoot: {
    width: 250
  },
  drawerToolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});

const DrawerMenu = ({ classes }) => (
  <div className={classes.drawerRoot}>
    <Toolbar className={classes.drawerToolbar}>
      <Link to="/">
        <Typography variant="title">App Name</Typography>
      </Link>
    </Toolbar>
    <Divider />
    <NavigationMenu />
  </div>
);

export default withStyles(styles)(DrawerMenu);

