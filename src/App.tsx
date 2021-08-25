import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWrapper from 'components/router/RouteWrapper';
import Loader from 'components/router/Loader';

import { ROUTES } from 'constants/routes';
import 'styles/App.css';

type Props = {};

const Home = React.lazy(() => import('pages/Home'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App: React.FC<Props> = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <RouteWrapper exact path={ROUTES.home} component={Home} />
          <RouteWrapper path={ROUTES.all} component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
