import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Icon, withStyles, Tooltip } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import DrawerMenu from './DrawerMenu';

const styles = (theme) => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      left: 250,
      width: 'calc(100% - 250px)'
    },
    boxShadow: 'none'
  },
  main: {
    marginTop: 55,
    padding: '20px',
    minHeight: 'calc(100vh - 55px)',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      minHeight: 'calc(100vh - 64px)',
      marginLeft: 250
    }
  },
  content: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 960,
      margin: '0 auto'
    }
  },
  landingMain: {
    padding: 0,
    maxWidth: '100vw',
    marginLeft: 0
  },
  landingAppBar: {
    left: 0,
    width: '100vw',
    boxShadow: 'none'
  }
});

class Layout extends Component {

  state = { drawerOpen: false };

  onDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  scrollToContent = () => {
    const contentEl = document.getElementById('content');
    contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const { classes, location } = this.props;
    const isLanding = location.pathname === '/';
    return (
      <Fragment>
        <AppBar
          position="fixed"
          className={classnames(classes.appBar, { [classes.landingAppBar]: isLanding })}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.onDrawerToggle}
            >
              <Icon>menu</Icon>
            </IconButton>

            <div className={classes.flex} />

            <Tooltip title="Grid" enterDelay={300}>
              <IconButton color="inherit" component="a">
                <GridOnIcon />
              </IconButton>
            </Tooltip>

          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.drawerOpen}
            onClose={this.onDrawerToggle}
            onClick={this.onDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerMenu />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant={isLanding ? 'temporary' : 'permanent'}
            open={this.state.drawerOpen}
            onClose={this.onDrawerToggle}
            classes={{ paper: classes.drawerPaper }}>
            <DrawerMenu />
          </Drawer>
        </Hidden>

        <main className={classnames(classes.main, { [classes.landingMain]: isLanding })}>
          <div className={classnames(classes.content, { [classes.landingMain]: isLanding })}>
            {this.props.children}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Layout));
