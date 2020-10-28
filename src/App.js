import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import * as ROUTES from './constants/routes'
import { Browser, Home, SignIn, Signup } from "./pages";
export default function App() {
  return (
    <Router>
      <Route exact path="/browser">
        <Browser />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
