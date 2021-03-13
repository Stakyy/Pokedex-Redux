import React from 'react';
import { PokemonInfo } from '../interfaces';
import axios from 'axios';
import LoadingPokeball from './LoadingPokeball';
import { Link } from 'react-router-dom';

export type data = {
  url: string;
};
export const loadPokemon = async (
  url: string,
  setState: Function,
  setSecondState: Function = () => {},
) => {
  const response = await axios.get(url);
  const data = response.data;
  setState(data);
  setSecondState(false);
};

const PokemonCard: React.FC<data> = (data) => {
  const [pokemonInfo, setPokemonInfo] = React.useState<PokemonInfo>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { url } = data;

  React.useEffect(() => {
    loadPokemon(url, setPokemonInfo, setIsLoading);
  }, []);

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
              className="pokedex-link"
              href="card.html">
              <img src={pokemonImage} alt={pokemonInfo?.name} />
            </Link>
            <div className="pokemon-info">
              <p className="id">
                #
                {Number(pokemonInfo?.id) < 10
                  ? '00' + pokemonInfo?.id
                  : Number(pokemonInfo?.id) >= 10 && Number(pokemonInfo?.id) < 100
                  ? '0' + pokemonInfo?.id
                  : pokemonInfo?.id}
              </p>
              <h5 className="pokemon-name">
                {pokemonInfo?.name[0].toUpperCase() + '' + pokemonInfo?.name.slice(1)}
              </h5>
              {pokemonInfo?.types.map((type) => {
                return (
                  <div key={type.type.name} className={'pokemon-abilities ' + type.type.name}>
                    <span>{type.type.name}</span>
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
