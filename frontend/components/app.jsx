import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload_form/upload_form_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />

    { children }
  </div>
);

export default App;
