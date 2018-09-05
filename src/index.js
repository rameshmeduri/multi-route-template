import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';

const history = createBrowserHistory();
history.listen(() => window.scrollTo(0, 0));

const Root = () => (
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
);

render(<Root />, document.getElementById('root'));
