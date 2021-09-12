import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login';
// import Profile from './Profile';
// import LogoutButton from './LogoutButton';
// import './header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        
        <NavItem><Link to="./Profile" className="nav-link">Profile</Link></NavItem>
        {/* // <Profile/> */}
        
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        
        <NavItem><Link to="./LogoutButton" className="nav-link">Logout </Link></NavItem>
        {/* // <LogoutButton/> */}
        
      </Navbar>
    )
  }
}

export default Header;
