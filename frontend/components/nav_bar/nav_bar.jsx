import React from 'react';
import { Link, withRouter } from 'react-router';
import AuthDisplay from './auth_display';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  logoutAndRedirect() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    return <nav className="main-nav">
      <h1 className="logo">askagram</h1>
      <AuthDisplay currentUser={ this.props.currentUser } logout={ this.logoutAndRedirect } />
    </nav>;
  }

}

export default withRouter(NavBar);
