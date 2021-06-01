import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {NavDropdown, Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import FirstPhase from "./FirstPhase";
import Phase2 from "./Phase2";
import Phase3 from "./a-components/Phase3";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/phase1" component={FirstPhase}/>
        <Route exact path="/phase2" component={Phase2}/>
        <Route exact path="/phase3" component={Phase3}/>
      </Router>
    </>
  );
}

export default App;
