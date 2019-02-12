import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";





class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} exact />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact}  />

          </Switch>

         


        </div>
      </BrowserRouter>
    );
  }
};

export default App;
