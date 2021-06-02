<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react'
||||||| a713b31
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
>>>>>>> localStorage
import WelcomePage from "./WelcomePage/WelcomePage";
import FirstPhase from "./FirstPhase/FirstPhase";
import SecondPhase from "./SecondPhase/SecondPhase";
import ThirdPhase from "./phase3-components/PhaseThree";
import CompletionPage from "./phase3-components/CompletionPage";
import "./App.css";

function App() {
<<<<<<< HEAD
  localStorage.setItem('completionStatuses', JSON.stringify({
    phaseOne: false,
    phaseTwo: false,
    phaseThree: false
  }))

||||||| a713b31
=======
  const [userCnt, setUserCnt] = useState(0);

>>>>>>> localStorage
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/first-phase">
            <FirstPhase userCnt={userCnt} />
          </Route>
          <Route exact path="/second-phase">
            <SecondPhase userCnt={userCnt} />
          </Route>
          <Route exact path="/third-phase">
            <ThirdPhase userCnt={userCnt} />
          </Route>
          <Route exact path="/success-page">
            <CompletionPage setUserCnt={setUserCnt} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
