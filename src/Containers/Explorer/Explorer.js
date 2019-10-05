import React, { Component } from 'react';

import './Explorer.css';
import Navigation from './Navigation/Navigation';

class Explorer extends Component {
  render() {
    return (
      <aside className="Explorer">
        <Navigation />
      </aside>
    );
  }
}

export default Explorer;
