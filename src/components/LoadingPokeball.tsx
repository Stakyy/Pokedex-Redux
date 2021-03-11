import React from 'react';
import Pokeball from '../assets/img/Pokeball.png';

const LoadingPokeball: React.FC = () => {
  return (
    <div className="loading-pokeball">
      <img src={Pokeball} alt="" />
    </div>
  );
};

export default LoadingPokeball;
