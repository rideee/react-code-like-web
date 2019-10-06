import React, { Component, Fragment } from 'react';

import './Explorer.css';
import ExplorerToggler from './ExplorerToggler/ExplorerToggler';
import Navigation from './Navigation/Navigation';

class Explorer extends Component {
  state = {
    isVisible: false
  }

  explorerStyle = () => {
    if (this.state.isVisible) return {transform: "translateX(0)"};
    return {transform: "translateX(-100%)"};
  }

  visibilityToggleHandler = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render = () => {
    return (
      <Fragment>

        <ExplorerToggler isVisible={this.state.isVisible} click={this.visibilityToggleHandler} />

        <aside style={this.explorerStyle()} className="Explorer">
          <Navigation />
        </aside>

      </Fragment>
    );
  }
}

export default Explorer;
