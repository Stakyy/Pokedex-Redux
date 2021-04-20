import { pokemonList } from '../../../interfaces';

export interface PokemonsState {
  items: pokemonList[];
  loading: boolean;
  error: null | string;
  nextUrl: string | null;
}

export enum PokemonActionTypes {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_SUCCES = 'FETCH_POKEMONS_SUCCES',
  FETCH_POKEMONS_FAILED = 'FETCH_POKEMONS_FAILED',
  FETCH_AND_ADD_POKEMONS = 'FETCH_AND_ADD_POKEMONS',
  SET_NEXT_URL = 'SET_NEXT_URL',
}

interface FetchPokemonsAction {
  type: PokemonActionTypes.FETCH_POKEMONS;
  // payload: string;
}
interface FetchAndAddPokemonsAction {
  type: PokemonActionTypes.FETCH_AND_ADD_POKEMONS;
}
interface FetchPokemonsSuccesAction {
  type: PokemonActionTypes.FETCH_POKEMONS_SUCCES;
  payload: Array<pokemonList>;
}
interface FetchPokemonsFailedAction {
  type: PokemonActionTypes.FETCH_POKEMONS_FAILED;
  payload: string;
}
interface SetNextUrl {
  type: PokemonActionTypes.SET_NEXT_URL;
  payload: string;
}

export type PokemonsAction =
  | FetchPokemonsAction
  | FetchPokemonsSuccesAction
  | FetchPokemonsFailedAction
  | FetchAndAddPokemonsAction
  | SetNextUrl;
