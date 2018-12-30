import React from 'react';

import {Switch, Route} from 'react-router-dom';
import LetsTalkContact from './LetsTalkContact';

//Component is used to Switch the DOM to display the LetsTalkContact component.

const LetsTalk = () => (
 <div className='lets-talk-head'>
   <Switch>

      <Route exact path='/LetsTalk' component={LetsTalkContact}/>

   </Switch>
 </div>
    )








export default LetsTalk;
