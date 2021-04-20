import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PokemonActionTypes, PokemonsAction } from '../store/types/pokemonList';

// https://pokeapi.co/api/v2/pokemon
export const fetchPokemons = () => {
  return async (dispacth: Dispatch<PokemonsAction>) => {
    try {
      dispacth({ type: PokemonActionTypes.FETCH_POKEMONS });
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      dispacth({ type: PokemonActionTypes.FETCH_POKEMONS_SUCCES, payload: response.data.results });
      dispacth({ type: PokemonActionTypes.SET_NEXT_URL, payload: response.data.next });
    } catch (e) {
      dispacth({
        type: PokemonActionTypes.FETCH_POKEMONS_FAILED,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export const fetchAndAddPokemons = (url: string) => {
  return async (dispatch: Dispatch<PokemonsAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });
      const response = await axios.get(url);
      //   const { items } = useTypedSelector((state) => state.pokemons);
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_SUCCES,
        payload: response.data.results,
      });
      dispatch({ type: PokemonActionTypes.SET_NEXT_URL, payload: response.data.next });
    } catch (e) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_FAILED,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};
