import React from 'react';

import classes from './home/Home.module.css';
import { Article } from 'components';

const lorem1 = `Quis aliqua consectetur ipsum quis enim tempor qui nostrud proident sint.`;
const lorem2 = `Nostrud eu pariatur sunt quis occaecat ipsum in duis nulla eiusmod occaecat velit. Labore est do sit eu veniam elit. Et tempor cupidatat ea pariatur reprehenderit Lorem cillum mollit anim tempor occaecat veniam irure. Cupidatat Lorem labore cupidatat exercitation eu est anim do. Ullamco aliquip officia velit ad. Ullamco cupidatat aliqua ea minim ea officia minim qui veniam.`;

const Home = () => (
  <div className={classes.Home}>
    <Article>
      <section>
        <h2>Lorem Ipsum</h2>
        <p>{lorem1}</p>
      </section>
      <section>
        <h2>A Very Long Thing to Talk About</h2>
        <p>{lorem2}</p>
      </section>
    </Article>
  </div>
);

export default Home;