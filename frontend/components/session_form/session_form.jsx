
import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemoButton = this.handleDemoButton.bind(this);
  }


  componentWillReceiveProps(newProps) {
    if(this.props.errors) this.props.clearErrors();
  }

  componentDidUpdate() {
    this.redirect();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  handleDemoButton(e) {
    e.preventDefault();
    this.props.demoLogin().then( () => this.redirect() );
  }

  handleChange(field) {
    return (e) => {
      this.setState( { [field]: e.target.value});
    };
  }

  errorList() {
  return <ul>
    { this.props.errors.map( (err, idx) =>  <li key={idx}>{err}</li>) }
  </ul>;
  }

  redirect() {
    if(this.props.loggedIn) this.props.router.push("/questions");
  }

  render(){
    return <form className="session-form" onSubmit={ this.handleSubmit }>
      <h2>{this.props.formType === 'signup' ? 'Sign Up' : 'Log In'}</h2>
      {this.props.errors ? this.errorList() : ""}
      <input type="text"
             placeholder="Username"
             onChange={this.handleChange("username")}
             value= {this.state.username}></input>
     <input type="password"
       placeholder="Password"
       onChange={this.handleChange("password")}
       value= {this.state.password}></input>
     <input type="submit" value="Submit"></input>
     <button onClick={this.handleDemoButton}>Demo Login</button>

    </form>;
  }

}

export default withRouter(SessionForm);
