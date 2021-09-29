import React from 'react';
import  "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

function ListItem({ icon, text, to }) {
  return (
      <NavLink to={`${to}`} className="sidebar_link">
        <li>
          <span className="icon">{icon}</span>
          <span>{text}</span>
        </li>
      </NavLink>
  );
}

export default ListItem;
