import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage/WelcomePage";
import FirstPhase from "./FirstPhase/FirstPhase";
import SecondPhase from "./SecondPhase/SecondPhase";
import ThirdPhase from "./phase3-components/PhaseThree";
import CompletionPage from "./phase3-components/CompletionPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/first-phase" component={FirstPhase} />
          <Route exact path="/second-phase" component={SecondPhase} />
          <Route exact path="/third-phase" component={ThirdPhase} />
          <Route exact path="/success-page" component={CompletionPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
