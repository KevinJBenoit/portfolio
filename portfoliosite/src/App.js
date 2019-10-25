import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js'
import Body from './Body/Body.js'
import Resume from './Resume/Resume.js'
import Portfolio from './Portfolio/Portfolio.js'
import Contact from './Contact/Contact.js'
import { Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="Site">
          <Navigation></Navigation>
          <Switch>
              
            <Route path="/resume">
              <Resume />
            </Route>
            
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            
            <Route path="/contact">
              <Contact />
            </Route>
            

            <Route path="/">
              <Body />
            </Route>

          </Switch>
    </div>


  );
}

export default App;
