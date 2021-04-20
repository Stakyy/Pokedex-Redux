import { PokemonsState, PokemonsAction, PokemonActionTypes } from '../types/pokemonList';
const initialState: PokemonsState = {
  items: [],
  loading: false,
  error: null,
  nextUrl: '',
};

export const pokemonsReducer = (state = initialState, action: PokemonsAction): PokemonsState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMONS:
      return { ...state, loading: true };
    case PokemonActionTypes.FETCH_POKEMONS_SUCCES:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case PokemonActionTypes.FETCH_POKEMONS_FAILED:
      return { ...state, error: action.payload };
    case PokemonActionTypes.SET_NEXT_URL:
      return { ...state, nextUrl: action.payload };
    case PokemonActionTypes.FETCH_AND_ADD_POKEMONS: {
      return { ...state };
    }
    default:
      return state;
  }
};
