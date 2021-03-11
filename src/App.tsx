import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={PokemonPage} path="/:pokemon" />
        </Switch>
        <footer className="footer">Stakyy</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
