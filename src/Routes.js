import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hocs/Layout';

import Home from './components/home/Home';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact component={Home} path="/" />
    </Switch>
  </Layout>
);

export default Routes;
