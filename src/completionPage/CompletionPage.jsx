import React from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron, Card, Button } from "react-bootstrap";

export default function CompletionPage({ userCnt, setUserCnt }) {
  const history = useHistory();
  const userDetails = JSON.parse(window.localStorage.getItem(`user_${userCnt}`));

  function returnHome() {
    setUserCnt(prev => ++prev);
    history.push("/");
  }

  return (
    <>
      <div className="position">
        <h1 className="text-center">Registration Complete!</h1>
      </div>
      <Card className="mx-auto registration-card" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={`${userDetails.imgURL}`} />
        <Card.Body>
          <Card.Title>Your Details - </Card.Title>
          <Card.Text>
            <p>{`Full Name: ${userDetails.name}`}</p>
            <p>{`Email: ${userDetails.Email}`}</p>
            <p>{`Birthdate: ${userDetails.birthDate.split("-").reverse().join("-")}`}</p>
            <p>{`Address: ${userDetails.city}, ${userDetails.street} ${userDetails.number}`}</p>
            <p>{`Hobbies: ${userDetails.hobbies}`}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
      <Button className="buttonColor" onClick={returnHome}>Add New User</Button>
      </div>
    </>
  );
}
