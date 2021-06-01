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

      {/* <Router>
      <Navbar variant="dark" bg="dark" expand="lg" className="mb-5">
        <Navbar.Brand href="#">Register Wizard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/phase1">Phase 1</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to="/phase2">Phase 2</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to="/phase3">Phase 3</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/phase1" component={FirstPhase}/>
        <Route exact path="/phase2" component={Phase2}/>
        <Route exact path="/phase3" component={Phase3}/>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
