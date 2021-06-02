import React from "react";
import { Jumbotron, Card } from "react-bootstrap";

export default function CompletionPage(props) {
  const userDetails = JSON.parse(window.localStorage.getItem(`user`));

  return (
    <Jumbotron>
      <h1>Registration Complete!</h1>
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src={`${userDetails.imgURL}`} />
        <Card.Body>
          <Card.Title>Your Details - </Card.Title>
          <Card.Text>
            <p>{`Full Name: ${userDetails.name}`}</p>
            <p>{`Email: ${userDetails.Email}`}</p>
            <p>{`Birthdate: ${userDetails.birthDate}`}</p>
            <p>{`Address: ${userDetails.city}, ${userDetails.street} ${userDetails.number}`}</p>
            <p>{`Hobbies: ${userDetails.hobbies}`}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Jumbotron>
  );
}
