import LandingPage from 'pages/landing';
import React from 'react';
import { Router as RouterDom, Switch, Route } from 'react-router-dom';
import history from 'technical/history';

const Router = () => {

  return (
    <RouterDom history={history}>
      <Switch>
        <Route exact path="/" children={<LandingPage />} />
        <Route path="/:slug" children={<LandingPage />} />
      </Switch>
    </RouterDom>
  )
}

export default Router;