import React from 'react';
import './Header.css';
import { Switch, Route, Router, Link, BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage';
import LetsTalk from './LetsTalk';
import LetsTalkContact from './LetsTalkContact';

//Using links because we need them in order to navigate through the pages. If we used anchor tags,
//clicking on them would cause the whole page to reload, <Link> updates the rendered content without reloading the whole page.
//<Link> tags use the "to" prop to describe the location that they should navigate to.This can either be a string or a location object
//(containing a combination of pathname, search, hash, and state properties)
// <Route exact path="/HomePage" component={HomePage} />
//<Route path="/LetsTalk" component={LetsTalkContact} />


const Header = () => (



<BrowserRouter>
  <div className='top-header-nav'>

      <ul className='header-styling'>

       <li><Link exact to='/HomePage'>Home</Link></li>

      <li><Link exact to='/LetsTalk'>Talk to Us</Link></li>

      </ul>

      <div className="content">
  <Route exact path="/" component={HomePage} />
  <Route exact path="/LetsTalk" component={LetsTalk} />

</div>




  </div>
  </ BrowserRouter>
 );



export default Header;
