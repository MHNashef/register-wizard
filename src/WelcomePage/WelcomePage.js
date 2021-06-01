import { Button } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  const history = useHistory();

  function moveToForm() {
    history.push("/first-phase");
  }

  return (
    <div className="vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="mb-4">Welcome to Register Wizard</h1>
        <Button className="buttonColor" onClick={moveToForm}>
          Click to Register
        </Button>
      </div>
    </div>
  );
}
