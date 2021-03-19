import { pokemonList } from '../../../interfaces';

export interface PokemonsState {
  items: Array<pokemonList>;
  loading: boolean;
  error: null | string;
}

export enum PokemonActionTypes {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_SUCCES = 'FETCH_POKEMONS_SUCCES',
  FETCH_POKEMONS_FAILED = 'FETCH_POKEMONS_FAILED',
}

interface FetchPokemonsAction {
  type: PokemonActionTypes.FETCH_POKEMONS;
}
interface FetchPokemonsSuccesAction {
  type: PokemonActionTypes.FETCH_POKEMONS_SUCCES;
  payload: Array<pokemonList>;
}
interface FetchPokemonsFailedAction {
  type: PokemonActionTypes.FETCH_POKEMONS_FAILED;
  payload: string;
}

export type PokemonsAction =
  | FetchPokemonsAction
  | FetchPokemonsSuccesAction
  | FetchPokemonsFailedAction;
