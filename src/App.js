import React, { Fragment } from 'react';
import Logo from './Components/Logo/Logo'
import Explorer from './Containers/Explorer/Explorer';

const App = () => {
  return (
    <Fragment>
      <Logo />
      <Explorer />
    </Fragment>
  );
}

export default App;
