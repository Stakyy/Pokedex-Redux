import React from 'react';
import Pokeball from './assets/Pokeball.png';
import s from './Loading.module.scss';

const LoadingPokeball: React.FC = () => {
  return (
    <div className={s.loading}>
      <img src={Pokeball} alt="pokeball" />
    </div>
  );
};

export default LoadingPokeball;
