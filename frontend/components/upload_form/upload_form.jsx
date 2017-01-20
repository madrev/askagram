import React from 'react';
import Dropzone from 'react-dropzone';
import { sendToCloudinary } from '../../util/answer_api_util.js';
import { withRouter } from 'react-router';


class UploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      externalUrl: ""
    };


    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
  }


  onImageDrop(files) {
    this.setState({
      selectedFile: files[0]
    });
  }

  onUrlChange(e) {
    this.setState({ externalUrl: e.target.value});
  }

  errorList() {
  const errors = this.props.uploadFormErrors;
  if(errors.length !== 0) return <ul>
    { errors.map( (err, idx) =>  <li key={idx}>{err}</li>) }
  </ul>;
  else return "";
  }

  handleSubmit(e) {
    e.preventDefault();
    const fileContent = this.state.selectedFile || this.state.externalUrl;
    this.props.createAnswer(fileContent,
                            this.props.questionId).then(() => this.redirectToDetail());

  }

  redirectToDetail() {
    this.props.closeModal();
    if(this.props.fromIndex) this.props.router.push(`/questions/${this.props.questionId}`);
  }


  render() {
    return(
      <div className="upload-form-container">

        <form onSubmit={this.handleSubmit}>
          <h5>Add an answer to...</h5>
          <h3>{this.props.title}</h3>
          <h5>{this.props.description}</h5>
            <div className="FileUpload">
              <Dropzone
                className="dropzone"
                onDrop={this.onImageDrop}
                multiple={false}
                accept="image/*">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>

            <div>
            {this.state.selectedFile ?
              <span><strong>Selected File:</strong> {this.state.selectedFile.name}</span> : "" }
            </div>
            <label>Or enter an external url:</label>
            <input type="text" onChange={ this.onUrlChange} value={this.state.externalUrl}></input>
            { this.errorList()}

            <input type="submit" value="Upload Answer"></input>

        </form>
      </div>
      );
    }


}
export default withRouter(UploadForm);
