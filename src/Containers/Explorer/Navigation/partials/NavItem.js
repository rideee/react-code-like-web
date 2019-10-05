import React from 'react';

function iColor(depth) {
  switch (depth) {
    case 1:
      return "var(--color-success)"
    case 2:
      return "var(--color-warning)"
    case 3:
      return "var(--color-danger)"
    case 4:
      return "var(--color-secondary)"
    default:
        return "var(--color-primary)"
  }
}

const NavItem = (props) => {
  const depthStyle = {
    marginLeft: props.depth ? (parseInt(props.depth) * 2) + "rem" : 0,
  };

  const depthIconColor = {
    color: iColor(parseInt(props.depth))
  };

  return (
    <div style={depthStyle} className="NavItem">
      {props.icon ? <i style={depthIconColor} className={props.icon}></i> : null}
      {props.children}
    </div>
  );
}

export default NavItem;
