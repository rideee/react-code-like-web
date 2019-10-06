import React from 'react';

import './ExplorerToggler.css';

const ExplorerToggler = (props) => {
  const togglerStyle = () => {
    if (props.isVisible) {
      return {
        background: "var(--color-bg-medium)",
        color: "var(--color-danger)",
      }
    }
    return null;
  }

  const iconStyle = () => {
    if (props.isVisible) {
      return {
        transform: "rotate(-90deg)",
        opacity: .7
      }
    }
  }

  return (
    <div style={togglerStyle()} className="ExplorerToggler" onClick={props.click}>
      <i style={iconStyle()} className="fas fa-bars"></i>
    </div>
  );
};

export default ExplorerToggler;
