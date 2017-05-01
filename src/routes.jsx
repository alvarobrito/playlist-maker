import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

// Containers
import SearchContainer from '@/containers/SearchContainer';
import SideBarContainer from '@/containers/SideBarContainer';

// Pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <SideBarContainer />
      <Route exact path="/" component={HomePage} />
      <Route path="/browse" component={SearchContainer} />
      <Route path="/login" component={LoginPage} />
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;