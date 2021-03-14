import React from 'react';

import { classes } from './article';

const Article = ({ children }) => {
  return (
    <article className={classes.Article}>
      { children }
    </article>
  );
}

export default Article;