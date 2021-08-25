import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any;
};

const NAME = 'default';

const Default: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full" data-layout={NAME}>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

Default.propTypes = {
  children: PropTypes.node.isRequired
};

export default Default;
