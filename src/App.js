import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from './components/Home';
import Start from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import RaceInfo from './components/RaceInfo';
import NameCharacter from './components/NameCharacter';
import SetAbilityScores from './components/SetAbilityScores';
import ChooseRace from './components/ChooseRace'

class App extends Component {
  render() {
    //every route gets router props automatically
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Start} />
            <Route path='/set-ability-scores' component={SetAbilityScores} />
            <Route path='/name-character' component={NameCharacter} />
            <Route path='/choose-race' component={ChooseRace} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:raceName' component={RaceInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;