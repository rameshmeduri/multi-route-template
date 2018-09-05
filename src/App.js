
import React from 'react';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout/index';
import Routes from './Routes/index';

let theme = {
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  status: {
    danger: 'orange'
  },
  typography: {
    button: {
      fontWeight: 400,
      textAlign: 'capitalize'
    }
  }
};

const App = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </MuiThemeProvider>
  );
};

export default App;
