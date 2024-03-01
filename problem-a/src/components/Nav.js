import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li><NavLink to="/adopt" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Adopt a Pet</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>About Us</NavLink></li>
        <li><NavLink to="/resources" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Resources</NavLink></li>
      </ul>
    </nav>
  );
}