import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonInfo } from '../interfaces';

type data = {
  id: number | undefined;
};
const startUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PrevPokemonBtn: React.FC<data> = (props) => {
  const [nextPoke, setNextPoke] = React.useState<PokemonInfo>();

  const loadPokemon = async (id: number | undefined) => {
    if (id !== undefined) {
      const response = await axios.get(startUrl + (id + 1));
      const data = response.data;
      setNextPoke(data);
    }
  };

  React.useEffect(() => {
    loadPokemon(props.id);
  }, [props.id]);

  return (
    <div>
      <button>
        <Link to={{ pathname: `/${nextPoke?.name}`, state: { url: startUrl + nextPoke?.name } }}>
          {nextPoke?.name}
        </Link>
      </button>
    </div>
  );
};

export default PrevPokemonBtn;
