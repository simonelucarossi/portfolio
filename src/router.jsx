import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import {
  ChakraProvider,
  ColorModeScript
} from "@chakra-ui/react";
import Dashboard from './pages/dashboard/dashboard';
import theme from './utils/theme';
import Projects from './pages/projects/projects';
import Jobs from './pages/jobs/jobs';
import Pricing from './pages/pricing/pricing';
import Contact from './pages/contactMe/contact';

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
    {
      title: 'Projects',
      key: 'projects',
      link: '/projects',
      // eslint-disable-next-line react/display-name
      component: () => {
        return <Projects />;
      },
    },
    {
      title: 'Jobs',
      key: 'jobs',
      link: '/jobs',
      // eslint-disable-next-line react/display-name
      component: () => {
        return <Jobs />;
      },
    },
    {
      title: 'Pricing',
      key: 'pricing',
      link: '/pricing',
      // eslint-disable-next-line react/display-name
      component: () => {
        return <Pricing />;
      },
    },
    {
      title: 'Contacts',
      key: 'contacts',
      link: '/contacts',
      // eslint-disable-next-line react/display-name
      component: () => {
        return <Contact />;
      },
    },
  ];

  return (
    
      <BrowserRouter>
      <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Switch>
          {routes.map(({ key, title, link, component }) => {
            const routeKey = `${key}@${title}`;
            return <Route exact key={routeKey} path={link} component={component} />;
          })}
        </Switch>
        
      </ChakraProvider>
      </BrowserRouter>
  );
};

Router.propTypes = {
};

export default Router;