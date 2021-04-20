import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PokemonActionCreators from '../redux/actions/pokemons';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(PokemonActionCreators, dispatch);
};
