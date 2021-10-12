import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <span>{number}</span>
    </div>
  )
}

export default SidebarOption;
