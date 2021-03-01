import React from 'react';
import { PokemonInfo } from '../interfaces';
import axios from 'axios';

type data = {
  name: string;
  url: string;
};

const PokemonCard: React.FC<data> = (data: data) => {
  const { url } = data;

  const [pokemonInfo, setPokemonInfo] = React.useState<PokemonInfo>();

  const loadPokemon = async () => {
    const response = await axios.get(url);
    const data = response.data;
    setPokemonInfo(data);
  };

  React.useEffect(() => {
    loadPokemon();
  }, []);

  const pokemonImage: string | undefined =
    pokemonInfo?.sprites.other['official-artwork'].front_default;

  return (
    <li className="pokedex-item">
      <div className="pokedex-card">
        <a className="pokedex-link" href="card.html">
          <img src={pokemonImage} alt="poke" />
        </a>
        <div className="pokemon-info">
          <p className="id">
            #
            {Number(pokemonInfo?.id) < 10
              ? '00' + pokemonInfo?.id
              : Number(pokemonInfo?.id) >= 10 && Number(pokemonInfo?.id) < 100
              ? '0' + pokemonInfo?.id
              : pokemonInfo?.id}
          </p>
          <h5 className="pokemon-name">{pokemonInfo?.name}</h5>
          {pokemonInfo?.types.map((type) => {
            return (
              <div className={'pokemon-abilities ' + type.type.name}>
                <span style={{ color: '#000000' }}>{type.type.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
