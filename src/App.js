import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import WelcomePage from "./WelcomePage/WelcomePage";
import FirstPhase from "./FirstPhase/FirstPhase";
import SecondPhase from "./SecondPhase/SecondPhase";
import ThirdPhase from "./phase3-components/PhaseThree";
import CompletionPage from "./completionPage/CompletionPage";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [userCnt, setUserCnt] = useState(0);

  return (
    <>
      <img id="logo" src={logo} alt="" height="150" />
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
            <CompletionPage userCnt={userCnt} setUserCnt={setUserCnt} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
