import { PokemonsState, PokemonsAction, PokemonActionTypes } from '../types/pokemonList';
const initialState: PokemonsState = {
  items: [],
  loading: false,
  error: null,
};

export const pokemonsReducer = (state = initialState, action: PokemonsAction): PokemonsState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMONS:
      return { loading: true, error: null, items: [] };
    case PokemonActionTypes.FETCH_POKEMONS_SUCCES:
      return { loading: false, error: null, items: action.payload };
    case PokemonActionTypes.FETCH_POKEMONS_FAILED:
      return { loading: false, error: action.payload, items: [] };
    default:
      return state;
  }
};
