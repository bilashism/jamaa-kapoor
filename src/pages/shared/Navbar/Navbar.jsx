import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const defaultNavClasses = ``;
  const activeNavClasses = `text-fuchsia-600`;
  const setClassNames = ({ isActive }) => {
    return `${defaultNavClasses} ${isActive ? activeNavClasses : ''}`.trimEnd();
  };

  return (
    <nav aria-label="main menu">
      <NavLink to="/" className={setClassNames}>
        home
      </NavLink>
      <NavLink to="/contact" className={setClassNames}>
        contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
