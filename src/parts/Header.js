import React from 'react';
import { Link } from 'react-router-dom';

import { ReadProgressBar } from 'components';
import classes from './header/Header.module.css';

const Header = () => {
  return (
    <header className={`${classes.Header}`}>
      <nav className={classes.Navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
      </nav>
      <ReadProgressBar />
    </header>
  );
};

export default Header;