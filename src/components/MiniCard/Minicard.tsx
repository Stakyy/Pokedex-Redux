import React from 'react';
import { Link } from 'react-router-dom';
import { loadData } from '../../Functions/Funcs';
import { PokemonInfo } from '../../interfaces';
// import { data } from '../PokemonCard/PokemonCard';
import s from './Minicard.module.scss';

type data = {
  name: string;
  url: string;
};

const Minicard: React.FC<data> = (data) => {
  const [pokemon, setPokemon] = React.useState<PokemonInfo>();
  const { url, name } = data;

  React.useEffect(() => {
    loadData(url, setPokemon);
  }, []);

  return (
    <Link to={{ pathname: `/${pokemon?.name}`, state: { url: url } }} className={s.minicard}>
      <div className={s.minicard_image}>
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      <div className={s.info}>
        <div className={s.minicard_number}>{` #${pokemon?.id}`}</div>
        <div className={s.minicard_name}>{`${name}`}</div>
      </div>
    </Link>
  );
};

export default Minicard;
