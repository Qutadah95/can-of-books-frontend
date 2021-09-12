import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          <Button variant="primary">Login Button</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
