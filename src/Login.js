import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LoginButton from './LoginButton';
// import './login.css';

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
          {/* <Button variant="primary" onClick={LoginButton}>LoginButton</Button> */}
          <a href='./LoginButton'>LoginButton</a>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
