import React from 'react';
import { Link } from 'react-router';


const AuthDisplay = ({currentUser, logout}) => {
  const authDisplayContents = () => {
    if(currentUser) {
        return <div className="welcome-message">
                <span>welcome, {currentUser.username}</span>
                <button onClick={ logout } >Log Out </button>
              </div>;
     } else {
     return <div className ="auth-links">
             <Link to="/login">Log in</Link> &nbsp;
             <Link to="/signup">Sign up</Link>
            </div>;
    }
  };

  return <div className="auth-display">{authDisplayContents()}</div>;
};

export default AuthDisplay;
