import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'assets/global.css';
import classes from "App.module.css";

import { Home, Test } from 'pages';
import { Footer, Header } from 'parts';

export default function App() {
  return (
    <Router>
      <div className={classes.App}>
        <Header className={classes.header} />
        <main className={classes.main}>
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
    </Router>
  );
}