import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      

      <ul id="nav-bar">
      <li className="navLink">
          <a href="/profile">Profile</a>
        </li>
        
        <li className="navLink">
          <a href="/project1">Project 1</a>
        </li>
        <li className="navLink">
          <a href="/project2">Project 2</a>
        </li>
        <li className="navLink">
          <a href="/project3">Project 3</a>
        </li>
        <li className="navLink">
          <a href="/project4">Project 4</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;