import React from 'react';

import './ExplorerToggler.css';

const ExplorerToggler = (props) => (
  <div className="ExplorerToggler" onClick={props.click}>
    <i className="fas fa-bars"></i>
  </div>
);

export default ExplorerToggler;
