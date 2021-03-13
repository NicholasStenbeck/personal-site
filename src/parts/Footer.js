import React from 'react';
import { Link } from 'react-router-dom';

import classes from 'assets/Footer.module.css';
import CvPhoto from 'assets/cv-photo.png';

const Footer = ({ className }) => (
  <footer className={`${className} ${classes.Footer}`} >
    <section className={classes.LinkSection}>
      <h2 className={classes.Title}>Links</h2>
      <ul className={classes.LinkList}>
        <li><Link to="/">Home</Link></li>
      </ul>
    </section>
    <section className={classes.PhotoSection}>
      <img src={CvPhoto} alt='My beautiful smile' className={classes.MainImage}></img>
    </section>
  </footer>
);

export default Footer;