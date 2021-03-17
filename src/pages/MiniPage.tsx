import axios from 'axios';
import React from 'react';
import Minicard from '../components/MiniCard/Minicard';

import '../scss/miniPage.scss';

type PokemonList = {
  name: string;
  url: string;
};

const url = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0';
const MiniPage: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<PokemonList[]>([]);

  const loadPokemons = async () => {
    const response = await axios.get(url);
    const data = response.data.results;

    setPokemons(data);
  };

  React.useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <div className="container">
      <div className="minipage">
        <h1 className="main-title">Pokedex Mini</h1>
        <ul className="pokedex_mini">
          {pokemons.map((item) => (
            <li className="item" key={item.name}>
              <Minicard url={item.url} name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiniPage;
