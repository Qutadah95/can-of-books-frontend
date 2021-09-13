import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <div id="footerDiv">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Code Fellows</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
