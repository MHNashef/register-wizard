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
    history.push("/");
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
            <h6>
              <Badge pill className="badge-bg-color mr-2">
                Full Name:
              </Badge>
              {userDetails.name}
            </h6>
            <h6>
              <Badge pill className="badge-bg-color mr-2">
                Email:
              </Badge>
              {userDetails.Email}
            </h6>
            <h6>
              <Badge pill className="badge-bg-color mr-2">
                Birthdate:
              </Badge>
              {userDetails.birthDate.split("-").reverse().join("-")}
            </h6>
            <h6>
              <Badge pill className="badge-bg-color mr-2">
                Address:
              </Badge>
              {`${userDetails.city}, ${userDetails.street} ${userDetails.number}`}
            </h6>
            <h6>
              <Badge pill className="badge-bg-color mr-2">
                Hobbies:
              </Badge>
              {userDetails.hobbies}
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
        <Button className="buttonColor" onClick={returnHome}>
          Add New User
        </Button>
      </div>
    </>
  );
}
