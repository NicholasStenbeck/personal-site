import React from 'react';
import classes from 'assets/Home.module.css';

const lorem1 = `Quis aliqua consectetur ipsum quis enim tempor qui nostrud proident sint.`;
const lorem2 = `Nostrud eu pariatur sunt quis occaecat ipsum in duis nulla eiusmod occaecat velit. Labore est do sit eu veniam elit. Et tempor cupidatat ea pariatur reprehenderit Lorem cillum mollit anim tempor occaecat veniam irure. Cupidatat Lorem labore cupidatat exercitation eu est anim do. Ullamco aliquip officia velit ad. Ullamco cupidatat aliqua ea minim ea officia minim qui veniam.`;

const Home = () => (
  <div className={classes.Home}>
    <article className={classes.article}>
      <section className={classes.articleSection}>
        <h2 className={classes.title}>Lorem Ipsum</h2>
        <p className={classes.paragraph}>{lorem1}</p>
      </section>
      <section className={classes.articleSection}>
        <h2 className={classes.title}>A Very Long Thing to Talk About</h2>
        <p className={classes.paragraph}>{lorem2}</p>
      </section>
    </article>
  </div>
);

export default Home;