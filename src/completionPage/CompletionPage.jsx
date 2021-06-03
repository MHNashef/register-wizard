import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

export default function CompletionPage({ userCnt, setUserCnt }) {
  const history = useHistory();
  const userDetails = JSON.parse(
    window.localStorage.getItem(`user_${userCnt}`)
  );

  function returnHome() {
    setUserCnt((prev) => ++prev);
    history.push("/first-phase");
  }

  return (
    <>
      <div className="position mt-5">
        <h1 className="text-center">Registration Complete!</h1>
      </div>
      <Card className="mx-auto registration-card" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={`${userDetails.imgURL}`} />
        <Card.Body>
          <Card.Title>Your Details </Card.Title>
          <Card.Text>
            <p>
              <Badge pill className="badge-bg-color mr-2">
                Full Name:
              </Badge>
              {userDetails.name}
            </p>
            <p>
              <Badge pill className="badge-bg-color mr-2">
                Email:
              </Badge>
              {userDetails.Email}
            </p>
            <p>
              <Badge pill className="badge-bg-color mr-2">
                Birthdate:
              </Badge>
              {userDetails.birthDate.split("-").reverse().join("-")}
            </p>
            <p>
              <Badge pill className="badge-bg-color mr-2">
                Address:
              </Badge>
              {`${userDetails.city}, ${userDetails.street} ${userDetails.number}`}
            </p>
            <p>
              <Badge pill className="badge-bg-color mr-2">
                Hobbies:
              </Badge>
              {userDetails.hobbies}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
        <Button className="buttonColor" onClick={returnHome}>
          Register New User
        </Button>
      </div>
    </>
  );
}
