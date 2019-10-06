import React, {Fragment} from 'react';

const NavItem = (props) => {

  const chevronStyle = {
    transform: props.isOpen ? "rotate(90deg)" : null
  }

  const childrenStyle = {
    display: props.isOpen ? null : "none",
    height: props.isOpen ? "auto" : 0
  }

  return (
    <Fragment>
      <div className="NavItem" onClick={props.click}>
        {props.icon ? <i className={"icon " + props.icon}></i> : null}
        {props.name}
        {props.children ? <i style={chevronStyle} className="chevron fas fa-chevron-right"></i> : null}
      </div>
      {props.children ? <div style={childrenStyle} className="NavItem--children">{props.children}</div> : null}
    </Fragment>
  );

}

export default NavItem;
