import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/pages/chat';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Chat} />
    </Switch>
  );
};

export default AppRoutes;
