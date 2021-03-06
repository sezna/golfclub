import React from "react";
import {Form, Button} from 'react-bootstrap';

function Login() {
  return (
    <div>
    { <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="col-4" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your login email.
    </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="col-4" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form> }
    </div>
  );
};

export default Login;