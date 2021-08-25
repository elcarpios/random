import React from 'react';
import PropTypes from 'prop-types';
import { Route, RouteProps } from 'react-router-dom';

import DefaultLayout from 'layouts/Default';

type Props = RouteProps & {
  component: any;
  layout?: any;
};

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  layout: Layout = DefaultLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

RouteWrapper.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.element
};

export default RouteWrapper;
