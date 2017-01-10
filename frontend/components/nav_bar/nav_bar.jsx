import React from 'react';
import { Link } from 'react-router';


const NavBar = ({ currentUser, logout}) =>
//TODO: make this an actual navbar
 {
  if(currentUser) {
    return <div className="welcome-message">
      <h2>Welcome, {currentUser.username}!</h2>
      <button onClick={ logout } >Log Out </button>
      </div>;
  } else {
    return  <p className ="auth-links">
      <Link to="/login">Log in</Link>
      <br />
      <Link to="/signup">Sign up</Link>
    </p>;
  }
};

export default NavBar;
