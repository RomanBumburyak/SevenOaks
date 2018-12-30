//Import the react and reactDom libraries

import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import MapContainer from './MapContainer';
import { Router, Route, IndexRoute, BrowserRouter,Switch, HashRouter } from "react-router-dom";

import Header from './Header';
import mainRouter from './mainRouter';






//Create a react function based component



const App = () => (




 <div className='BodyWrapperMain'>

   <Header />
   <mainRouter />
   <HomePage />



</div>

)

ReactDOM.render((

  <HashRouter >

  <React.Fragment>
     <App />


  </React.Fragment>

  </HashRouter>

), document.getElementById('root'));
