
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Page1 from './group1/Page1';
import Page2 from './group1/Page2';
import Page3 from './group2/Page3';
import Page4 from './group2/Page4';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
    <Route path="/page4" component={Page4} />
  </Switch>
);

