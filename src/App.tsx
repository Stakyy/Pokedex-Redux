import React from 'react';
import logo from '../src/assets/img/poke-logo.svg';
import PokemonCard from './components/PokemonCard';
import axios from 'axios';

type Pokemon = {
  name: string;
  url: string;
};

function App() {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);

  const loadPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = response.data.results;
    setPokemonData(data);
  };

  React.useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <nav className="main-navigation">
            <a className="main-header-logo" href="/">
              <img src={logo} alt="logo" />
            </a>
          </nav>
        </header>
        <main className="page-main pokedex">
          <h1 className="main-title">POKEDEX</h1>

          <div className="search-and-sort">
            <div className="search">
              <form action="get">
                <input id="search" placeholder="Введите имя или номер" type="text" />
                <button type="submit">
                  <i className="button-img"></i>
                </button>
              </form>
            </div>
            <div className="sort">
              <label className="sort-selected">Сортировать</label>
              <span className="sort-arrow">
                <svg className="strelka-bottom-2" viewBox="0 0 9 14">
                  <path
                    className="svg-strelka"
                    d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"
                    width="20px"></path>
                </svg>
              </span>
              <ul className="sort-pokedex">
                <li className="sort-item">A-Z</li>
                <li className="sort-item">Z-A</li>
                <li className="sort-item">По номеру</li>
                <li className="sort-item">В обратном порядке</li>
              </ul>
            </div>
          </div>

          <div className="pokedex">
            <ul className="pokedex-list">
              {pokemonData.map((object: Pokemon) => {
                return (
                  <PokemonCard key={object.name + object.url} name={object.name} url={object.url} />
                );
              })}
            </ul>
          </div>
        </main>
        <footer className="footer">Stakyy</footer>
      </div>
    </div>
  );
}

export default App;
