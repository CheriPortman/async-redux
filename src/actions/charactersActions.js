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
