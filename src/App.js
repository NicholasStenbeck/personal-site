import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'assets/global.css';
import classes from "App.module.css";

import { Home, Test } from 'pages';
import { Footer, Header } from 'parts';
import { DataContext } from "Context";
import ScrollToTop from "components/ScrollToTop";

export default function App() {
  const scrollTargetRef = useRef();

  return (
    <Router>
      <ScrollToTop />
      <DataContext.Provider value={{ scrollTargetRef }}>
          <Header className={classes.header} />
        <div className={classes.App}>
          <main ref={scrollTargetRef} className={classes.main}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </main>
          <aside className={classes.sidebar}>
            I am a sidenote
          </aside>
          <Footer className={classes.footer} />
        </div>
      </DataContext.Provider>
    </Router>
  );
}