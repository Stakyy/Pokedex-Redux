import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { evolution_chain, PokemonInfo } from '../interfaces';

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
      console.log(response.data);
    }
  };

  const firstName = evoChain?.chain.species?.name;
  const secondName = evoChain?.chain?.evolves_to?.[0]?.species?.name;
  const thirdName = evoChain?.chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;
  const names: (string | undefined)[] = [];
  names.push(firstName);
  names.push(secondName);
  names.push(thirdName);

  // Загрузка покемонов в цепь в стейт
  const loadChain = async (arr: (string | undefined)[]) => {
    arr.map(async (name) => {
      if (name !== undefined) {
        const response = await axios.get(startUrl + name);
        const data = await response.data;
        console.log(data);

        setPokemons((prev) => [...prev, { ...data }]);
      }
    });
  };

  React.useEffect(() => {
    loadEvoChain();
  }, [url]);

  React.useEffect(() => {
    loadChain(names);
    console.log(names);
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
    <div className="evolution">
      <ul className="evolution-list">
        {pokemons?.map((elem) => {
          return (
            <li key={elem.id} className="evolution-list-item">
              <Link
                to={{ pathname: `/${elem.name}`, state: { url: `${startUrl + elem.name + '/'}` } }}>
                <img
                  className="pokeImg"
                  src={elem.sprites.other['official-artwork'].front_default}
                  alt="pokeImg"
                />
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
