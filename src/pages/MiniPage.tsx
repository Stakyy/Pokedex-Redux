import { EventType } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import Minicard from '../components/MiniCard/Minicard';

import '../scss/miniPage.scss';

type PokemonList = {
  name: string;
  url: string;
};

const MiniPage: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<PokemonList[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0',
  );
  const [loading, setLoading] = React.useState(true);

  const loadPokemons = async () => {
    if (nextUrl !== null) {
      try {
        const response = await axios.get(nextUrl);
        const data = response.data.results;
        const next = response.data.next;
        setPokemons([...pokemons, ...data]);
        setNextUrl(next);
      } finally {
        setLoading(false);
      }
    }
  };

  const srollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoading(true);
    }
  };

  React.useEffect(() => {
    if (loading) {
      loadPokemons();
    }
  }, [loading]);

  React.useEffect(() => {
    document.addEventListener('scroll', srollHandler);
    return function () {
      document.removeEventListener('scroll', srollHandler);
    };
  }, []);

  return (
    <div className="container">
      <div className="minipage">
        <h1 className="main-title">Pokedex Mini</h1>
        <ul className="pokedex_mini">
          {pokemons &&
            pokemons.map((item) => (
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
