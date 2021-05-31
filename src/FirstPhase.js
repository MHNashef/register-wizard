import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Phase 1:
// --------
// 1- Name       (required, 2 words (fn + ln), minimum 2 characters each)
// 2- Email      (required, valid email address)
// 3- Birth Date (required, dd/MM/yy)

export function FirstPhase() {
  const [userData, setUserData] = useState({
    fullName: {
      newValue: "",
      errors: [],
    },
    email: {
      newValue: "",
      errors: [],
    },
    birth: {
      newValue: "",
      errors: [],
    },
  });

  const userValidation = ({ target: { name, value } }) => {
    const newErrors = [];
    if (value.trim() === "") {
      newErrors.push("Field is required");
    }
    if (value && name === "fullName") {
      if (!value.trim().includes(" ")) {
        newErrors.push("Both first name and last name are required");
      }
      if (
        value.trim().includes(" ") &&
        (value.split(" ")[0].length < 2 || value.split(" ")[1].length < 2)
      ) {
        newErrors.push(
          "First name and last name must consist of at least 2 characters each"
        );
      }
    }
    if (value && name === "email") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        newErrors.push("Invalid Email address");
      }
    }
    setUserData({
      ...userData,
      [name]: {
        ...userData[name],
        errors: newErrors,
        newValue: value,
      },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className="container">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ploni Almoni"
            required
            name="fullName"
            onBlur={userValidation}
          />
          {userData.fullName.errors.map((error, idx) => (
            <Form.Text key={`${idx}`} className="text-danger">
              {error}
            </Form.Text>
          ))}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@wawa.com"
            required
            name="email"
            onBlur={userValidation}
          />
          {userData.email.errors.map((error, idx) => (
            <Form.Text key={`${idx}`} className="text-danger">
              {error}
            </Form.Text>
          ))}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birth date</Form.Label>
          <Form.Control
            type="date"
            name="birth"
            required
            onBlur={userValidation}
          />
          {userData.birth.errors.map((error, idx) => (
            <Form.Text key={`${idx}`} className="text-danger">
              {error}
            </Form.Text>
          ))}
        </Form.Group>
        <div className="text-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}
