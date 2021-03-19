import { combineReducers } from 'redux';
import { pokemonsReducer } from './PokemonsReduser';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});
