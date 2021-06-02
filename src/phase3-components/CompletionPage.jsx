import React from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

export default function CompletionPage({setUserCnt}) {
  const history = useHistory();

  function returnHome() {
    setUserCnt(prev => ++prev);
    history.push("/");
  }

  return (
    <Jumbotron>
      <h1>Registration Completed!</h1>
        <Button onClick={returnHome}>Add New User</Button>
    </Jumbotron>
  );
}
