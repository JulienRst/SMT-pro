import LandingPage from 'pages/landing';
import React from 'react';
import { Router as RouterDom, Switch, Route } from 'react-router-dom';
import history from 'technical/history';
import FromSourceCallBack from 'pages/FromSourceCallBack';

const Router: React.FC = () => {

  return (
    <RouterDom history={history}>
      <Switch>
        <Route exact path="/" children={<LandingPage />} />
        <Route exact path="/from/:source" children={<FromSourceCallBack />} />
        <Route path="/:slug" children={<LandingPage />} />
      </Switch>
    </RouterDom>
  )
}

export default Router;