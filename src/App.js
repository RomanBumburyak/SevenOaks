import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Directory from "./components/Directory";
import Services from "./components/Services";
import ExMenu from "./components/ExMenu";
import MozgiBanner from "./components/MozgiBanner";

import Footer from "./components/Footer";





class App extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
   
        <div >
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/ExMenu" component={ExMenu} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services}  />
            <Route path="/contact" component={Contact}  />
            <Route path="/directory" component={Directory}  />
            <Route path="/MozgiBanner" component={MozgiBanner}  />

            
          </Switch>
          
        </div>
  
      </BrowserRouter>
      
    
    );
  }
};

export default App;
