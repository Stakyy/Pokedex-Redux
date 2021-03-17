import axios from 'axios';
import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import Evolution from '../components/Evolution/Evolution';
import NextPokemonBtn from '../components/Buttons/NextPokemonBtn';
import { data } from '../components/PokemonCard/PokemonCard';
import PrevPokemonBtn from '../components/Buttons/PrevPokemonBtn';
import { PokemonInfo, species } from '../interfaces';
import { loadData } from '../Functions/Funcs';
import s from '../components/PokemonCard/pokemon_card.module.scss';

const url = 'https://pokeapi.co/api/v2/pokemon';

const PokemonPage: React.FunctionComponent<RouteComponentProps> = () => {
  const [pokemonInfo, setPokemonInfo] = React.useState<PokemonInfo>();
  const [species, setSpecies] = React.useState<species>();
  let { state } = useLocation<data>();
  const data = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (state !== undefined) {
      loadData(state.url, setPokemonInfo);
    } else {
      loadData(url + data.pathname, setPokemonInfo);
    }
  }, [state]);

  React.useEffect(() => {
    loadData(pokemonInfo?.species.url, setSpecies);
  }, [pokemonInfo]);

  const pokemonImage: string | undefined =
    pokemonInfo?.sprites.other['official-artwork'].front_default;

  return (
    <div className="pokemon-page">
      <div className="buttons">
        <PrevPokemonBtn id={pokemonInfo?.id} />
        <NextPokemonBtn id={pokemonInfo?.id} />
      </div>

      <div className="container-page">
        <h3 className="pokemon-page-name">
          {pokemonInfo?.name[0].toUpperCase() + '' + pokemonInfo?.name.slice(1) + ' '}#
          {Number(pokemonInfo?.id) < 10
            ? '00' + pokemonInfo?.id
            : Number(pokemonInfo?.id) >= 10 && Number(pokemonInfo?.id) < 100
            ? '0' + pokemonInfo?.id
            : pokemonInfo?.id}
        </h3>

        <div className="pokemon-about">
          <div className="pokemon-image">
            <img src={pokemonImage} alt={pokemonInfo?.name} />
          </div>
          <div className="text">{species?.flavor_text_entries[1]?.flavor_text}</div>
          <div className="types">
            <h3 className="stats-title">Тип</h3>
            <div className="abilities">
              {pokemonInfo?.types.map((type) => {
                return (
                  <div key={type.type.name} className={`${s.pokemon_types} ` + type.type.name}>
                    <span className={s.type}>{type.type.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="stats">
            <h3 className="stats-title">Stats</h3>
            <ul className="stats-table">
              {pokemonInfo?.stats.map((stat) => (
                <li key={stat.stat.name} className="stats-row">
                  <div className="stats-name">{stat.stat.name.replace('-', ' ')}</div>
                  <div className="stats-value">
                    <div
                      className="stats-line"
                      style={{ width: `${(stat.base_stat / 250) * 100}%` }}>
                      {stat.base_stat}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="info">
            <div className="info-height">
              <h3>Рост</h3>
              {Number(pokemonInfo?.height) / 10} Метра
            </div>
            <div className="info-weight">
              <h3>Вес</h3>
              {Number(pokemonInfo?.weight) / 10} кг
            </div>
            <div className="info-abilities">
              <h3>Способности</h3>
              {pokemonInfo?.abilities.map((ability) => {
                if (!ability.is_hidden)
                  return (
                    <div key={ability.ability.name} className="info-abilities_ability">
                      {ability.ability.name.replace('-', ' ')}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <section>
          <Evolution url={species?.evolution_chain.url} />
        </section>
      </div>
    </div>
  );
};

export default PokemonPage;
