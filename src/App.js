import React, { useState } from 'react';
import Pokedex from './components/Pokedex';
import SearchModal from './components/SearchModal';
import './App.css';

const COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='App'>
      <Pokedex setShowModal={setShowModal} />
      <SearchModal visible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default App;
