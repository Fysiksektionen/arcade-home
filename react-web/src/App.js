import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import kvackman from './Kvackman.png';
import fnollsflykt from './fnolls_flykt.png';
import codenames from './codenames.png';
import campus_d from './campus_defence.png';
import te1ris from './te1ris.png';
import './App.css';



function Game({ link, name, img_name}) {
  return (
    <a
      className="App-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-block', margin: '0.5%' }}
    >
      <h2>{name}</h2>
      <img src={img_name} width={150} height={150} alt='Här är en bild på spelet'/>
      
    </a>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Fysiksektionens arcade-sida!</h1>
      <p>
        Hej och Välkomna samtliga Fysematiker till denna plats. Här hittar ni Fysiksektionens legendariska spel!
      </p>
      <div className="games-container">
        <Game link="https://f.kth.se/arcade/kvackman" name="Kvackman" img_name={kvackman}/>
        <Game link="https://f.kth.se/arcade/fnollsflykt/" name="Fnolls Flykt" img_name={fnollsflykt}/>
        <Game link="https://f.kth.se/arcade/codenames/" name="Codenames" img_name={codenames}/>
        <Game link="https://f.kth.se/arcade/campusdefence" name="Campus Defence" img_name={campus_d}/>
        <Game link="https://pyro-cryo.github.io/Te1ris/" name="Te1ris" img_name={te1ris}/>
        {/* Lägg till fler spel här */}
      </div>
    </div>
  );
}

export default App;
