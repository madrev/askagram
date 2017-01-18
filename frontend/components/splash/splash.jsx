import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

const SplashPage = (props) => (
  <div className='splash-page'>
    <img src="http://res.cloudinary.com/askagram/image/upload/v1484777046/splash2.jpg"/>
    <h1>Answer with pictures.</h1>
    <SessionFormContainer />
  </div>
);

export default SplashPage;
