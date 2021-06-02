import Hobbies from "./Hobbies";
import Image from "./Image";
import { useHistory } from "react-router-dom";
import { Button, Form, Col, Container, Card } from "react-bootstrap";
import React, { useState, useRef } from "react";
import "./PhaseThree.css";

export default function Phase3() {
  const [componentData, setComponentData] = useState({});

  const history = useHistory();

  function prevForm() {
    history.push("/second-phase");
  }

  // phase completion validation
  const completionStatuses = JSON.parse(localStorage.getItem("completionStatuses"))
  function validatePreviousPages() {
    if (!completionStatuses.phaseTwo) {
      alert("Please finish the previous phases first");
      prevForm()
    }
  }
  validatePreviousPages();


  function getComponentData(key, data) {
    setComponentData({
      ...componentData,
      [key]: data,
    });
  }

  function sendToLocalStorage(data) {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    localStorage.setItem("user", JSON.stringify({ ...user, ...data }));

    const completionStatuses = JSON.parse(localStorage.getItem("completionStatuses"))
    completionStatuses['phaseThree'] = true;
    localStorage.setItem("completionStatuses", JSON.stringify(completionStatuses));
  }

  function saveData(event) {
    event.preventDefault();
    if (componentData.imgURL && componentData.hobbies) {
      sendToLocalStorage(componentData);
      formRef.current.reset();
      history.push("/success-page");
    } else alertAppropriateError();
  }

  function alertAppropriateError() {
    if (!componentData.imgURL && !componentData.hobbies) {
      alert("Please fill the form");
    } else if (!componentData.imgURL) {
      alert("Please write a valid URL");
    } else if (!componentData.hobbies) {
      alert("Please write your hobbies");
    }
  }

  const formRef = useRef();

  return (
    <Card className="mx-auto mt-5 registration-card" style={{width: "25rem"}}>
      <Card.Body>
      <Form ref={formRef}>
        <Hobbies sendComponentData={getComponentData} />
        <Image sendComponentData={getComponentData} />
        <div className="text-center">
          <Button className="buttonColor mr-5" onClick={prevForm}>
            &#10094; Prev
          </Button>
          <Button
            className="buttonColor"
            onClick={(event) => {
              saveData(event);
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
  );
}
