import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAndSet } from '../../Functions/Funcs';
import { PokemonInfo } from '../../interfaces';
import s from './Buttons.module.scss';

type data = {
  id: number | undefined;
};
const startUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PrevPokemonBtn: React.FC<data> = (props) => {
  const [prevPoke, setPrevPoke] = React.useState<PokemonInfo>();

  const loadPokemon = async (id: number | undefined) => {
    if (id !== undefined) {
      if (id === 1) {
        await fetchAndSet(startUrl, setPrevPoke, 898);
      }
      await fetchAndSet(startUrl, setPrevPoke, id - 1);
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
    <Link
      className={`${s.nav_button} ${s.prev}`}
      to={{ pathname: `/${prevPoke?.name}`, state: { url: startUrl + prevPoke?.name } }}>
      <span className={s.number}>
        #
        {Number(prevPoke?.id) < 10
          ? '00' + prevPoke?.id
          : Number(prevPoke?.id) >= 10 && Number(prevPoke?.id) < 100
          ? '0' + prevPoke?.id
          : prevPoke?.id}
      </span>{' '}
      <span className={s.name}>{prevPoke?.name} </span>
    </Link>
  );
};

export default PrevPokemonBtn;
