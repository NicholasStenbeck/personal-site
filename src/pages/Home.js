import React from 'react';
import classes from 'assets/Home.module.css';
import jasontree from 'assets/Jasontree.png';

const lorem = `Quis aliqua consectetur ipsum quis enim tempor qui nostrud proident sint. Lorem velit proident nisi sit quis consequat esse eu amet voluptate et adipisicing sunt. Aliquip eiusmod sit anim veniam aute adipisicing labore.
Nostrud eu pariatur sunt quis occaecat ipsum in duis nulla eiusmod occaecat velit. Labore est do sit eu veniam elit. Et tempor cupidatat ea pariatur reprehenderit Lorem cillum mollit anim tempor occaecat veniam irure. Cupidatat Lorem labore cupidatat exercitation eu est anim do. Ullamco aliquip officia velit ad. Ullamco cupidatat aliqua ea minim ea officia minim qui veniam.`;

const Home = () => (
  <div className={classes.Home}>
    <article className={classes.article}>
      <img src={jasontree} alt='A bonsai tree' className={classes.Tree}></img>
      <h2 className={classes.title}>Lorem Ipsum</h2>
      <p className={classes.paragraph}>{lorem}</p>
      <h2 className={classes.title}>A Very Long Thing to Talk About</h2>
      <p className={classes.paragraph}>{lorem}</p>
    </article>
  </div>
);

export default Home;