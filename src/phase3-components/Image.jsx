import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Image(props) {
  // email validation
  const isValidURL = (urlStr) => {
    if (urlStr.length > 1024) {
      alert('Your link is too long, youre probably using an image from google, please use a shorter link');
      return false
    }
    if (urlStr.match(/\.(jpeg|jpg|gif|png)$/)) {
      return true;
    }
  };

  const handleChange = (event) => {
    if (isValidURL(event.target.value)) {
      props.sendComponentData("imgURL", event.target.value);
    } else {
      console.log("error - invalid email");
    }
  };

  return (
    <Form.Group>
      <Form.Label htmlFor="img-url">Image URL: </Form.Label>
      <Form.Control
        onChange={(event) => handleChange(event)}
        type="url"
        id="img-url"
        placeholder="https://example.com"
      />
      <Form.Text></Form.Text>
    </Form.Group>
  );
}
