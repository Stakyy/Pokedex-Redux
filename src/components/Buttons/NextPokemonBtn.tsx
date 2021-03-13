import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAndSet } from '../../Functions/Funcs';
import { PokemonInfo } from '../../interfaces';
import style from './Buttons.module.scss';
type data = {
  id: number | undefined;
};
const startUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PrevPokemonBtn: React.FC<data> = (props) => {
  const [nextPoke, setNextPoke] = React.useState<PokemonInfo>();

  const loadPokemon = async (id: number | undefined) => {
    if (id !== undefined) {
      if (id === 898) {
        await fetchAndSet(startUrl, setNextPoke, 1);
      }
      fetchAndSet(startUrl, setNextPoke, id + 1);
    }
  };

  React.useEffect(() => {
    loadPokemon(props.id);
  }, [props.id]);

  return (
    <Link
      className={`${style.nav_button} ${style.next}`}
      to={{ pathname: `/${nextPoke?.name}`, state: { url: `${startUrl + nextPoke?.name}` } }}>
      <span className="number">
        #
        {Number(nextPoke?.id) < 10
          ? '00' + nextPoke?.id
          : Number(nextPoke?.id) >= 10 && Number(nextPoke?.id) < 100
          ? '0' + nextPoke?.id
          : nextPoke?.id}
      </span>{' '}
      <span className={style.name}>{nextPoke?.name} </span>
    </Link>
  );
};

export default PrevPokemonBtn;
