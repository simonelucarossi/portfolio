import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard';

const Router = () => {
  const routes = [
    {
      title: 'Dashboard',
      key: 'dashboard',
      link: '/',
      // eslint-disable-next-line react/display-name
      component: () => {
        return <Dashboard />;
      },
    },
  ];

  return (
      <BrowserRouter>
        <Switch>
          {routes.map(({ key, title, link, component }) => {
            const routeKey = `${key}@${title}`;
            return <Route exact key={routeKey} path={link} component={component} />;
          })}
        </Switch>
      </BrowserRouter>
  );
};

Router.propTypes = {
};

export default Router;