/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

/**
 * Internal Dependencies
 */
// Reset styles
// eslint-disable-next-line import/extensions
import './reset.css.js';

/**
 * Lazy imports for custom views
 */
const Home = React.lazy(() => import('./views/Home'));

/**
 * App Component managing routes.
 */
const App = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </React.Suspense>
  </Router>
);

// Export
export default hot(module)(App);
