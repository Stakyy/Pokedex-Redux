import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonInfo } from '../interfaces';

type data = {
  id: number | undefined;
};
const startUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PrevPokemonBtn: React.FC<data> = (props) => {
  const [prevPoke, setPrevPoke] = React.useState<PokemonInfo>();

  const loadPokemon = async (id: number | undefined) => {
    if (id !== undefined && id - 1 !== 0) {
      const response = await axios.get(startUrl + (id - 1));
      const data = response.data;
      setPrevPoke(data);
    }
  };

  React.useEffect(() => {
    loadPokemon(props.id);
    console.log(prevPoke);
    return () => {
      setPrevPoke(undefined);
    };
  }, [props.id]);

  return (
    <div>
      {prevPoke && (
        <button>
          <Link to={{ pathname: `/${prevPoke?.name}`, state: { url: startUrl + prevPoke?.name } }}>
            {prevPoke?.name}
          </Link>
        </button>
      )}
    </div>
  );
};

export default PrevPokemonBtn;
