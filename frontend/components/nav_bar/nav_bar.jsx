import React from 'react';
import { Link } from 'react-router';
import AuthDisplay from './auth_display';


const NavBar = ({ currentUser, logout}) => (
  <nav className="main-nav">
    <h1>Askagram</h1>
    <AuthDisplay currentUser={ currentUser } logout={ logout } />
  </nav>
);



export default NavBar;
