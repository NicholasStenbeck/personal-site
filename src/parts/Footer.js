import React from 'react';
import { Link } from 'react-router-dom';

import classes from 'assets/Footer.module.css';
import CvPhotoCompressed from 'assets/cv-photo-compressed.png';

const Footer = ({ className }) => (
  <footer className={`${className} ${classes.Footer}`} >
    <section className={classes.LinkSection}>
      <h2 className={classes.Title}>Links</h2>
      <ul className={classes.LinkList}>
        <li><Link to="/">Home</Link></li>
      </ul>
    </section>
    <section className={classes.PhotoSection}>
      <img src={CvPhotoCompressed} alt='My beautiful smile' className={classes.MainImage}></img>
    </section>
  </footer>
);

export default Footer;