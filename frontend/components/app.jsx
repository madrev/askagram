import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <h1>Askagram</h1>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
