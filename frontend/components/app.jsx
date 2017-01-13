import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload_form/upload_form_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <NavBarContainer />

      { this.props.children }
    </div>;
  }
}

export default App;
