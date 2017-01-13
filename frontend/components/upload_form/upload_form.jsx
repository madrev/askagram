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
      uploadedFileCloudinaryUrl: ''
    };
    this.currentUserId = this.props.currentUser.id;
    this.questionId = this.props.params.questionId;
    this.onImageDrop = this.onImageDrop.bind(this);
  }

 // TODO: move answer creation to a button handler, keep file in state
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.props.createAnswer(files[0], this.questionId, this.currentUserId);

  // this.handleImageUpload(files[0]);
 }

  // handleImageUpload(file) {
  //   let upload = request.post(CLOUDINARY_UPLOAD_URL)
  //                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //                       .field('file', file);
  //
  //   upload.end((err, response) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //
  //     if (response.body.secure_url !== '') {
  //       this.setState({
  //         uploadedFileCloudinaryUrl: response.body.secure_url
  //       });
  //     }
  //   });
  // }



  render() {
    return(
      <form>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop}
                multiple={false}
                accept="image/*">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>

            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
        </form>
      );
    }


}
export default UploadForm;
