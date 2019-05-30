import {
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING
} from '../actions/CharacterDetailActions';

const initialState = {
  character: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER: 
      return { ...state, character: action.payload, loading: false };
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
