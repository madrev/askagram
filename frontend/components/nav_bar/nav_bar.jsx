import React from 'react';
import { Link, withRouter } from 'react-router';
import AuthDisplay from './auth_display';
import SearchBarContainer from './search_bar_container';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  logoutAndRedirect() {
    this.props.logout().then( () => this.props.router.push('/login'));
  }

  render() {
    return <nav className="main-nav">
      <Link to="/"><h1 className="logo">askagram</h1></Link>
      <SearchBarContainer />
      <AuthDisplay currentUser={ this.props.currentUser } logout={ this.logoutAndRedirect } />
    </nav>;
  }

}

export default withRouter(NavBar);
