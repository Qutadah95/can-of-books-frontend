import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>

        {isAuth && (
          <div>
            <NavItem>
              <Link to="/profile" className="nav-link">
                My Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
          </div>
        )}
        {isAuth ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
