import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function FirstPhase({ userCnt }) {
  const history = useHistory();
  const formRef = useRef(null);
  const [userData, setUserData] = useState({
    fullName: {
      newValue: "",
      errors: [],
      isValid: false,
    },
    email: {
      newValue: "",
      errors: [],
      isValid: false,
    },
    birth: {
      newValue: "",
      errors: [],
      isValid: false,
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
    if (newErrors.length > 0) {
      setUserData({
        ...userData,
        [name]: {
          ...userData[name],
          errors: newErrors,
        },
      });
    } else {
      setUserData({
        ...userData,
        [name]: {
          ...userData[name],
          errors: newErrors,
          newValue: value,
          isValid: true,
        },
      });
    }
  };

  const onSubmitHandler = (e) => e.preventDefault();

  const saveData = ({ fullName, email, birth }) => {
    if (fullName.isValid && email.isValid && birth.isValid) {
      const newUser = {
        name: fullName.newValue,
        Email: email.newValue,
        birthDate: birth.newValue,
      };
      localStorage.setItem(`user_${userCnt}`, JSON.stringify(newUser));

      formRef.current.reset();
      history.push("/second-phase");
    }
  };

  return (
    <Card className="mx-auto registration-card" style={{ width: "25rem" }}>
      <Card.Body>
        <Form ref={formRef} onSubmit={onSubmitHandler}>
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
              max="2008-06-02"
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
            <Button
              className="buttonColor"
              variant="primary"
              type="submit"
              onClick={() => saveData(userData)}
            >
              Next &#10095;
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
