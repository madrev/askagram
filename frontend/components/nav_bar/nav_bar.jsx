import React from 'react';
import { Link, withRouter } from 'react-router';
import AuthDisplay from './auth_display';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  logoutAndRedirect() {
    this.props.logout().then( ()=> this.props.router.push('/login'));
  }

  render() {
    return <nav className="main-nav">
      <Link to="/"><h1 className="logo">askagram</h1></Link>
      <AuthDisplay currentUser={ this.props.currentUser } logout={ this.logoutAndRedirect } />
    </nav>;
  }

}

export default withRouter(NavBar);
