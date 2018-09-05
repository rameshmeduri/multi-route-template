
import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  content: {
    paddingTop: '80px',
    backgroundColor: theme.palette.background.default,
    minHeight: 'calc(100vh - 63px)',
    maxWidth: 900,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    '@media(max-width: 600px)': {
      minHeight: 'calc(100vh - 55px)'
    }
  }
});

class Home extends Component {

  scrollToContent = () => {
    const contentEl = document.getElementById('content');
    contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="content" className={classes.content}>
        <Typography variant="display1" align="center" gutterBottom>
          heading
          </Typography>
        <Typography align="center" gutterBottom>
          content Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea iure doloribus molestiae atque assumenda. Ad sapiente dolorum doloremque aut quo et ut nobis eveniet, ratione enim fugit explicabo incidunt.
          </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
