import React from 'react';

import PokemonCard from '../components/PokemonCard/PokemonCard';
import axios from 'axios';
import Search from '../components/Search/Search';
import ButtonNext from '../components/ButtonNext/ButtonNext';

type PokemonList = {
  name: string;
  url: string;
};

const url = 'https://pokeapi.co/api/v2/pokemon';

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<PokemonList[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string | null>(url);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  //стартовая загрузка покемонов
  const loadPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = response.data.results;
    const nextUrl = response.data.next;
    setPokemonData(data);
    setNextUrl(nextUrl);
    setIsLoading(false);
  };
  // Загрузка покемонов по кнопке
  const onHandleNext = async () => {
    if (nextUrl !== null) {
      const response = await axios.get(nextUrl);
      const data = response.data.results;
      const next = response.data.next;
      setPokemonData([...pokemonData, ...data]);
      setNextUrl(next);
    }
  };

  const fetchPokemon = async (link: string) => {
    //
    const response = await axios.get(link);
    const name = response.data.name;
    setPokemonData([{ name: name, url: link }]);
  };

  //Функция поиска покемона из инпута
  const getPokemon = async (nameOrNumber: any) => {
    let link: string;

    if (nameOrNumber === '') {
      loadPokemons();
    } else if (!isNaN(nameOrNumber)) {
      link = `${url}/${nameOrNumber}`;
      fetchPokemon(link);
      setNextUrl(null);
    } else {
      link = `${url}/${nameOrNumber.toLowerCase()}`;
      fetchPokemon(link);
      setNextUrl(null);
    }
  };

  React.useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <main className="pokedex-container">
      <h1 className="main-title">POKEDEX</h1>

      <div className="search">
        <Search getPokemon={getPokemon} />
      </div>

      <div className="pokedex">
        <ul className="pokedex-list">
          {isLoading && !pokemonData ? (
            <h1>Loading</h1>
          ) : (
            pokemonData.map((object: PokemonList) => {
              return <PokemonCard key={object.url} url={object.url} />;
            })
          )}
        </ul>
        {nextUrl !== null ? <ButtonNext onLoad={onHandleNext} /> : <></>}
      </div>
    </main>
  );
};

export default Home;
