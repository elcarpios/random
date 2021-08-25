import React from 'react';

type Props = {};

const Loader: React.FC<Props> = () => {
  return <h1>Loading</h1>;
};

export default React.memo(Loader);
