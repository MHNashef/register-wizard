import React from "react";
<<<<<<< HEAD
import { Jumbotron, Card } from "react-bootstrap";

export default function CompletionPage() {
  const userDetails = JSON.parse(window.localStorage.getItem("user"));
||||||| a713b31
import { Jumbotron } from "react-bootstrap";
=======
import { useHistory } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

export default function CompletionPage({setUserCnt}) {
  const history = useHistory();

  function returnHome() {
    setUserCnt(prev => ++prev);
    history.push("/");
  }
>>>>>>> localStorage

  return (
    <Jumbotron>
      <h1>Registration Completed!</h1>
<<<<<<< HEAD
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src={`${userDetails.img}`} />
        <Card.Body>
          <Card.Title>Your details</Card.Title>
          <Card.Text>
            <p>{`Name: ${userDetails.name}`}</p>
            <p>{`Email: ${userDetails.Email}`}</p>
            <p>{`Birthdate: ${userDetails.birthDate}`}</p>
            <p>{`Address: ${userDetails.city}, ${userDetails.street} ${userDetails.number}`}</p>
            <p>{`Hobbies: ${userDetails.hobbies}`}</p>
          </Card.Text>
        </Card.Body>
      </Card>
||||||| a713b31
=======
        <Button onClick={returnHome}>Add New User</Button>
>>>>>>> localStorage
    </Jumbotron>
  );
}
