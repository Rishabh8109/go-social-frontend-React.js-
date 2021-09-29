import React , {useContext} from 'react';
import  "../styles/Header.css";
import { FiSearch , FiMenu } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import {Link} from 'react-router-dom';
import Toggle from './Toggle';


function Header({
  show,
  setshow,
}) {

  return (
    <header className="header">
      <div>
        <Link to="/" className="navbrand">
          gosocial
        </Link>
        <div className="searchBox">
          <input type="text" placeholder="search" />
          <FiSearch className="searchIcon" />
        </div>
      </div>
     
      <div className="icons">
        <FiSearch className="SearchIcon"/>
        <AiOutlineUserAdd className="userAddIcon"/>
        <FiMenu className="menuIcon" onClick={() => setshow(!show)}/>
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
