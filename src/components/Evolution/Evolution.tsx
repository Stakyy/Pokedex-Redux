import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
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

  // загрузка данных эворлюции
  const loadEvoChain = async () => {
    if (url !== undefined) {
      const response = await axios.get(url);
      setEvoChain(response.data);
    }
  };

  const firstName = evoChain?.chain.species?.name;
  const secondName = evoChain?.chain?.evolves_to?.[0]?.species?.name;
  const thirdName = evoChain?.chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;
  // const names = [firstName, secondName, thirdName];
  // Загрузка покемонов в цепь в стейт
  // const loadChain = async (arr: (string | undefined)[]) => {
  //   arr.map(async (name) => {
  //     if (name !== undefined) {
  //       const response = await axios.get(startUrl + name);
  //       const data = await response.data;
  //       setPokemons((prev) => [...prev, { ...data }]);
  //     }
  //   });
  // };

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
    loadEvoChain();
  }, [url]);

  React.useEffect(() => {
    fetchChain();
    return () => {
      setPokemons([]);
    };
  }, [evoChain]);

  // React.useEffect(() => {
  //   fetchChain();
  //   return () => {
  //     setPokemons([]);
  //   };
  // }, [firstName, secondName, thirdName]);

  // React.useEffect(() => {
  //   console.log(pokemons);
  //   pokemons.sort((poke1, poke2) => Number(poke1.id) - Number(poke2?.id));
  // }, [pokemons]);

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
                <h4>{elem.name}</h4>
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

// {pokemons?.map((elem) => {
//   return (
//     <li key={elem.id} className="evolution-list-item">
//       <Link
//         to={{ pathname: `/${elem.name}`, state: { url: `${startUrl + elem.name + '/'}` } }}>
//         <img
//           className="pokeImg"
//           src={elem.sprites.other['official-artwork'].front_default}
//           alt="pokeImg"
//         />
//         <h4>{elem.name}</h4>
//       </Link>
//       <div className="abilities">
//         {elem.abilities.map((abil) => {
//           return (
//             <div
//               key={abil.ability.name}
//               className={'pokemon-abilities ' + abil.ability.name}>
//               <span>{abil.ability.name}</span>
//             </div>
//           );
//         })}
//       </div>
//     </li>
//   );
// })}

// {names.map((name) => (name ? <PokemonCard key={name} url={startUrl + name} /> : null))}
