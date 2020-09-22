import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './composant/counter';
// { }
function App() {
  return (
    <div className="m-3">
      <Counter title="COunter 1" value={1} image="img/profile3.jpg"/>
      <Counter title="counter 2" value={1} image="img/profile1.jpg"/>

    </div>
  );
}

export default App;
