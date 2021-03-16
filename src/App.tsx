import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About';
import Home from './pages/Home';
import MiniPage from './pages/MiniPage';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route path="/mini" exact component={MiniPage} />
          <Route path="/about" exact component={About} />
          <Route component={PokemonPage} path="/:pokemon" exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
