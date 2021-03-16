import React from 'react';
import s from './Footer.module.scss';
import pokeapi from './assets/pokeapi_256.png';

const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.pokeapi}>
        <span className={s.text}>Created with</span>
        <a href="https://pokeapi.co/">
          <img src={pokeapi} alt="pokeapi" />
        </a>
      </div>
      <div className={s.stakyy}>
        <span className={s.text}>Created by</span>
        <span className={s.link}>
          <a href="https://vk.com/a.vester">Stakyy</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
