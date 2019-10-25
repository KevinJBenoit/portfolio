import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js'
import Body from './Body/Body.js'
import Resume from './Resume/Resume.js'

function App() {
  return (
    <div className="Site">
          <Navigation></Navigation>
          <Resume></Resume>
          {/* <Body></Body> */}
    </div>
  );
}

export default App;
