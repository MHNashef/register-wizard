
import Hobbies from './Hobbies';
import Image from './Image';
import { Button, Form, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';


export default function Phase3() {
  const [componentData, setComponentData] = useState({});

  function getComponentData(key, data) {
    setComponentData({
      ...componentData,
      [key]: data
    })
  }

  function sendToLocalStorage(data) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    localStorage.setItem('user', JSON.stringify({ ...user, ...data }));
  }

  function saveData(event) {
    event.preventDefault();
    if (componentData.imgURL && componentData.hobbies) {
      sendToLocalStorage(componentData);
      formRef.current.reset();
    } else alertAppropriateError();
  }

  function alertAppropriateError() {
    if ((!componentData.imgURL && !componentData.hobbies)) {
      alert('Please fill the form')
    } else if (!componentData.imgURL) {
      alert('Please write a valid URL')
    } else if (!componentData.hobbies) {
      alert('Please write your hobbies')
    }
  }

  const formRef = useRef();

  return (
    <Form ref={formRef}>
      <Col md={3}>
        <Hobbies sendComponentData={getComponentData} />
        <Image sendComponentData={getComponentData} />
        <Button onClick={(event) => { saveData(event) }} type="submit">Submit</Button>
      </Col>
    </Form>
  );
}
