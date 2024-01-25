import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import kvackman from './Kvackman.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fysiksektionens arcade-sida!</h1>
      <p>
        Hej och Välkomna samtliga Fysematiker till denna plats. Här hittar ni Fysiksektionens legendariska spel!
      </p>
        <a
          className="App-link"
          href="https://f.kth.se/arcade/kvackman"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <h2 className="kvackman-text">Kvackman</h2>
        </a>
        <img src={kvackman} width={200} height={200} style={{ position: 'relative', top: '10px', left: '-200px'}}/>

    </div>

  );
}

export default App;
