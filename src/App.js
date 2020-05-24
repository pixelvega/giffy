import React from 'react';
import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to='/gif/cat' >Cats</Link>
        <Link to='/gif/dog' >Dogs</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
