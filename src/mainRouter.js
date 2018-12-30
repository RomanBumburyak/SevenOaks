import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LetsTalk from './LetsTalk'
import LetsTalkContact from './LetsTalkContact'


// The Main component renders one of the three provided
// Routes , Routes have three components that can be used to define what should be rendered.
//component, render & children. Only one should be provided to a <Route> Element.
//Using the Switch case operator to handle the conditional rendering of multiple states.
const mainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/LetsTalk' component={LetsTalk}/>

    </Switch>
  </main>
)

export default mainRouter;
