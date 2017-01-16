import React from 'react';
import Dropzone from 'react-dropzone';
import { sendToCloudinary } from '../../util/answer_api_util.js';
import { withRouter } from 'react-router';


class UploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      externalUrl: null
    };

    this.currentUserId = this.props.currentUser.id;
    this.questionId = this.props.questionId;
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

  handleSubmit(e) {
    e.preventDefault();
    const fileContent = this.state.selectedFile || this.state.externalUrl;
    this.props.createAnswer(fileContent,
                            this.questionId).then(() => this.redirectToDetail());

  }

  redirectToDetail() {
    this.props.closeModal();
    if(this.props.fromIndex) this.props.router.push(`/questions/${this.questionId}`);
  }


  render() {
    return(
      <div className="upload-form-container">

        <form onSubmit={this.handleSubmit}>
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
              <span>Selected File: {this.state.selectedFile ? this.state.selectedFile.name : ""}</span>
            </div>
            <label>Or enter an external url:
            <input type="text" onChange={ this.onUrlChange} value={this.state.externalUrl}></input>
            </label>
            <input type="submit" value="Upload Answer"></input>

        </form>
      </div>
      );
    }


}
export default withRouter(UploadForm);
