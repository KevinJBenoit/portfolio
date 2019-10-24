import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js'
import Body from './Body/Body.js'
import Footer from './Footer/Footer.js'

function App() {
  return (
    <div className="Site">
          <Navigation></Navigation>
          <Body></Body>
          {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
