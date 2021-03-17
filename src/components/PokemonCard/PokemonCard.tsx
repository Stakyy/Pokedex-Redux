import React from 'react';
import { PokemonInfo } from '../../interfaces';
import LoadingPokeball from '../LoadingPokeball/LoadingPokeball';
import { Link } from 'react-router-dom';
import { loadData } from '../../Functions/Funcs';
import s from './pokemon_card.module.scss';

export type data = {
  url: string;
};

const PokemonCard: React.FC<data> = (data) => {
  const [pokemonInfo, setPokemonInfo] = React.useState<PokemonInfo>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { url } = data;

  //Грузим покемона в карточку
  React.useEffect(() => {
    loadData(url, setPokemonInfo, setIsLoading);
  }, []);

  //Картинка покемона, для простоты
  const pokemonImage: string | undefined =
    pokemonInfo?.sprites.other['official-artwork'].front_default;

  return (
    <li className="pokedex-item">
      <div className="pokedex-card">
        {isLoading && !pokemonInfo ? (
          <LoadingPokeball />
        ) : (
          <div>
            <Link
              to={{ pathname: `/${pokemonInfo?.name}`, state: { url: url } }}
              className="pokedex-link">
              <img src={pokemonImage} alt={pokemonInfo?.name} />
            </Link>
            <div className={s.pokemon_info}>
              <p className={s.id}>
                #
                {Number(pokemonInfo?.id) < 10
                  ? '00' + pokemonInfo?.id
                  : Number(pokemonInfo?.id) >= 10 && Number(pokemonInfo?.id) < 100
                  ? '0' + pokemonInfo?.id
                  : pokemonInfo?.id}
              </p>
              <h5 className={s.pokemon_name}>
                {pokemonInfo?.name[0].toUpperCase() + '' + pokemonInfo?.name.slice(1)}
              </h5>
              {pokemonInfo?.types.map((type) => {
                return (
                  <div key={type.type.name} className={`${s.pokemon_types} ` + type.type.name}>
                    <span className={s.type}>{type.type.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default PokemonCard;
