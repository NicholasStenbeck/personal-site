import React from 'react';
import { Link } from 'react-router-dom';

import classes from 'assets/Header.module.css';

const Header = ({ className }) => (
  <header className={`${className} ${classes.Header}`}>
    <nav className={classes.Navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;