import React from 'react';
// import logo from '../../logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddPhrase from '../Phrases/AddPhrase'
import ListPhrases from '../Phrases/ListPhrases'
import Quiz from '../Quiz/Quiz'
import { TopNav, TopNavLink } from './styles'

let App: React.FC
App = function () {
  return (
    <BrowserRouter basename="/apps/engquiz">
      <TopNav>
        <TopNavLink to="/add">Add Phrase</TopNavLink>
        <TopNavLink to="/">List Phrases</TopNavLink>
        <TopNavLink to="/quiz">Quiz</TopNavLink>
      </TopNav>
      <Switch>
        <Route exact path="/">
          <ListPhrases/>
        </Route>
        <Route path="/add">
          <AddPhrase/>
        </Route>
        <Route path="/quiz">
          <Quiz/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
