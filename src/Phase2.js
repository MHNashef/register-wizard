import React, { useState, useRef } from "react";
import { Form, Container, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";

function Phase2() {
  const [emptyCityError, setEmptyCityError] = useState(null);
  const [emptyStreetError, setEmptyStreetError] = useState(null);
  const formRef = useRef();
  const [validation, setValidation] = useState({
    validCity: false,
    validStreet: false,
  });
  const [userInfo, setUserInfo] = useState({
    city: "",
    street: "",
    number: "",
  });
  const history = useHistory();

  function checkEmpty({ target: { value, name } }) {
    if (name === "City") {
      if (value.length === 0) {
        setEmptyCityError(`${name} is required`);
        validation.validCity = false;
      } else {
        setEmptyCityError("");
        validation.validCity = true;
        userInfo.city = value;
      }
    } else if (name === "Street") {
      if (value.length === 0) {
        setEmptyStreetError(`${name} is required`);
        validation.validStreet = false;
      } else {
        setEmptyStreetError("");
        validation.validStreet = true;
        userInfo.street = value;
      }
    }
  }

  function updateNumValue({ target: { value } }) {
    userInfo.number = value;
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  function saveInfo() {
    console.log(userInfo);
    if (validation["validCity"] && validation["validStreet"]) {
      formRef.current.reset();
      const updatedUser = JSON.parse(window.localStorage.getItem("user"));
      const { city, street, number } = userInfo;

      window.localStorage.setItem(
        "user",
        JSON.stringify({ ...updatedUser, city, street, number })
      );

      history.push("/phase3")
    } else {
      alert("Make sure to enter a City and Street name");
    }
  }

  function prevForm() {
    history.push("/phase1")
  }

  return (
    <>
      <Container>
        <Form onSubmit={onSubmit} ref={formRef}>
          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="City"
              placeholder="Enter city"
              onBlur={checkEmpty}
            />
            {emptyCityError && (
              <Form.Text className="text-danger">{emptyCityError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicStreet">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="Street"
              placeholder="Enter street"
              onBlur={checkEmpty}
            />
            {emptyStreetError && (
              <Form.Text className="text-danger">{emptyStreetError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="999"
              name="Number"
              placeholder="Enter number"
              onBlur={updateNumValue}
            />
          </Form.Group>
        </Form>
        <div className="text-center">
          <Button className="mr-5" variant="primary" onClick={prevForm}>
            &#10094; Back 
          </Button>
          <Button variant="primary" type="submit" onClick={saveInfo}>
            Next &#10095;
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Phase2;
