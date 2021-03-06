import Hobbies from "./Hobbies";
import Image from "./Image";
import { useHistory } from "react-router-dom";
import { Button, Form, Col, Container, Card } from "react-bootstrap";
import React, { useState, useRef } from "react";

export default function Phase3({ userCnt }) {
  const [formData, setFormData] = useState({});

  const history = useHistory();

  function prevForm() {
    history.push("/second-phase");
  }

  function getFormData(key, data) {
    setFormData({
      ...formData,
      [key]: data,
    });
  }

  function sendToLocalStorage(data) {
    let user = localStorage.getItem(`user_${userCnt}`);
    user = JSON.parse(user);
    localStorage.setItem(
      `user_${userCnt}`,
      JSON.stringify({ ...user, ...data })
    );
  }

  function saveData(event) {
    event.preventDefault();
    if (formData.imgURL && formData.hobbies) {
      sendToLocalStorage(formData);
      formRef.current.reset();
      history.push("/success-page");
    } else alertAppropriateError();
  }

  function alertAppropriateError() {
    if (!formData.imgURL && !formData.hobbies) {
      alert("Please fill the form");
    } else if (!formData.imgURL) {
      alert("Please write a valid URL");
    } else if (!formData.hobbies) {
      alert("Please write your hobbies");
    }
  }

  const formRef = useRef();

  return (
    <Card className="mx-auto registration-card" style={{ width: "25rem" }}>
      <Card.Body>
        <Form ref={formRef}>
          <Hobbies sendFormData={getFormData} />
          <Image sendFormData={getFormData} />
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
