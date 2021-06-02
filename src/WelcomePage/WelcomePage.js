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
    <div className="mt-5">
      <div className="text-center">
        <h1 className="mb-4">Welcome to Register Wizard</h1>
        <Button className="buttonColor" onClick={moveToForm}>
          Click to Register
        </Button>
      </div>
    </div>
  );
}
