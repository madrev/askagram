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

 // TODO: move answer creation to a button handler, keep file in state
  onImageDrop(files) {
    this.setState({
      selectedFile: files[0]
    });

 }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnswer(this.state.selectedFile, this.questionId, this.currentUserId);
    this.redirectToDetail();

  }

  redirectToDetail() {
    this.props.router.push(`/questions/${this.questionId}`);
  }



  render() {
    return(
      <form onSubmit>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop}
                multiple={false}
                accept="image/*">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>

            <div>
              <p>{this.state.uploadedFile.name}</p>
            </div>

            <input type="submit" val="Upload Answer"></input>


        </form>
      );
    }


}
export default UploadForm;
