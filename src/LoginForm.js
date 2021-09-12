import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }

  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */

    return (
      <div>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

export default LoginForm;
