import { DataContext } from 'Context';
import React, { useState, useEffect, useCallback, useContext } from 'react';

import classes from './readProgressBar/ReadProgressBar.module.css';

const ReadProgressBar = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const { scrollTargetRef } = useContext(DataContext);

  const onScroll = useCallback(() => {
    if (!scrollTargetRef.current) {
      return;
    }

    const element = scrollTargetRef.current;
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const totalHeight = element.clientHeight - element.offsetTop - vh;
    const windowScrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  }, [scrollTargetRef])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return <div className={classes.ReadingProgressBar} style={{ width: `${readingProgress}%` }} />;
}

export default ReadProgressBar;