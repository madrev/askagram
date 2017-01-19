import React from 'react';

class QuestionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  errorList() {
  const errors = this.props.questionFormErrors;
  if(errors.length !== 0) return <ul>
    { errors.map( (err, idx) =>  <li key={idx}>{err}</li>) }
  </ul>;
  else return "";
  }


  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.createQuestion({ question }).then( () => this.clearState() );
  }

  handleChange(field) {
    return (e) => {
      this.setState( { [field]: e.target.value});
    };
  }

  clearState() {
    this.setState({ title:"", description: "" });
  }


  render(){
    return <form className="question-form" onSubmit={ this.handleSubmit }>
      <h2>Ask a Question...</h2>
      <input type="text"
             placeholder="Title"
             onChange={this.handleChange("title")}
             value= {this.state.title}></input>
     <input type="text"
       placeholder="Description"
       onChange={this.handleChange("description")}
       value= {this.state.description}></input>
     { this.errorList() }
     <input type="submit" value="Submit"></input>

    </form>;
  }

}

export default QuestionForm;
