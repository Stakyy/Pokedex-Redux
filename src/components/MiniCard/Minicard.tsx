import React from 'react';
import { Link } from 'react-router-dom';
import { loadData } from '../../Functions/Funcs';
import { PokemonInfo } from '../../interfaces';
import { data } from '../PokemonCard';
import s from './Minicard.module.scss';

const Minicard: React.FC<data> = (data) => {
  const [pokemon, setPokemon] = React.useState<PokemonInfo>();
  const { url } = data;

  React.useEffect(() => {
    loadData(url, setPokemon);
  }, []);

  return (
    <Link to={{ pathname: `/${pokemon?.name}`, state: { url: url } }} className={s.minicard}>
      <div className={s.minicard_image}>
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      <div className={s.minicard_name}>{pokemon?.name}</div>
    </Link>
  );
};

export default Minicard;
