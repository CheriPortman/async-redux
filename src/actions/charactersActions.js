import { createAction } from 'promise-middleware-redux';
// source: https://www.npmjs.com/package/promise-middleware-redux
import { getCharacters } from '../services/avatarApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS, 
  FETCH_CHARACTERS_LOADING, //pending
  FETCH_CHARACTERS_FULFILLED, //fulfilled
  FETCH_CHARACTERS_ERROR //rejected
] = createAction('FETCH_CHARACTERS', getCharacters);


// export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
// export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
// export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

// export const fetchCharacters = () => dispatch => {
//   dispatch({
//     type: FETCH_CHARACTERS_LOADING
//   });

//   return getCharacters() 
//     .then(character => {
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: character
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: FETCH_CHARACTERS_ERROR,
//         payload: err
//       });
//     });
// };
