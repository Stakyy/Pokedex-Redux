import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { loadData } from '../../Functions/Funcs';
import { evolution_chain, PokemonInfo } from '../../interfaces';
import s from './Evolution.module.scss';

type data = {
  url: string | undefined;
};

const startUrl = 'https://pokeapi.co/api/v2/pokemon/';

const Evolution: React.FC<data> = (props) => {
  const [evoChain, setEvoChain] = React.useState<evolution_chain>();
  const [pokemons, setPokemons] = React.useState<PokemonInfo[]>([]);
  const { url } = props;

  // загрузка данных эволюции
  // const loadEvoChain = async () => {
  //   if (url !== undefined) {
  //     const response = await axios.get(url);
  //     setEvoChain(response.data);
  //   }
  // };

  const firstName = evoChain?.chain?.species?.name;
  const secondName = evoChain?.chain?.evolves_to?.[0]?.species?.name;
  const thirdName = evoChain?.chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;

  const loadChain = async (name: string | undefined) => {
    const response = await axios.get(startUrl + name);
    const data = await response.data;
    setPokemons((prev) => [...prev, { ...data }]);
  };

  const fetchChain = async () => {
    await loadChain(firstName);
    await loadChain(secondName);
    await loadChain(thirdName);
  };

  React.useEffect(() => {
    loadData(url, setEvoChain);
  }, [url]);

  React.useEffect(() => {
    fetchChain();
    return () => {
      setPokemons([]);
    };
  }, [evoChain]);

  return (
    <div className={s.evolution}>
      <h2>Эволюция</h2>
      <ul className={s.evolution_list}>
        {pokemons?.map((elem) => {
          return (
            <li key={elem.id} className={s.evolution_list_item}>
              <Link
                to={{ pathname: `/${elem.name}`, state: { url: `${startUrl + elem.name + '/'}` } }}>
                <div className={s.pokeImg}>
                  <img src={elem.sprites.other['official-artwork'].front_default} alt={elem.name} />
                </div>
                <h4 className={s.name}>{elem.name}</h4>
              </Link>
              <div className="abilities">
                {elem.types.map((abil) => {
                  return (
                    <div key={abil.type.name} className={'pokemon-abilities ' + abil.type.name}>
                      <span>{abil.type.name}</span>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Evolution;
