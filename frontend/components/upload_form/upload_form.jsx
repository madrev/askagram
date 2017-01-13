import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { sendToCloudinary } from '../../util/answer_api_util.js';

const CLOUDINARY_UPLOAD_PRESET = 'askagram';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/askagram/upload';

class UploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      selectedFile: null
    };
    this.currentUserId = this.props.currentUser.id;
    this.questionId = this.props.params.questionId;
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onImageDrop(files) {
    this.setState({
      selectedFile: files[0]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnswer(this.state.selectedFile,
                            this.questionId,
                            this.currentUserId).then(() => this.redirectToDetail());

  }

  redirectToDetail() {
    this.props.router.push(`/question/${this.questionId}`);
  }



  render() {
    return(
      <form onSubmit={this.handleSubmit}>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop}
                multiple={false}
                accept="image/*">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>

            <div>
              <span>Selected File: {this.state.selectedFile ? this.state.selectedFile.name : ""}</span>
            </div>

            <input type="submit" value="Upload Answer"></input>

        </form>
      );
    }


}
export default UploadForm;
