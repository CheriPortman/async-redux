import {
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_ERROR
} from './charactersActions.js';

// import getCharacters from '../services/avatarApi';

jest.mock('../services/avatarApi.js');

describe('characters actions', () => {
  it('dispatches locating action and a fetch characters action', () => {

    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      fulfilledType: FETCH_CHARACTERS_FULFILLED,
      rejectedType: FETCH_CHARACTERS_ERROR,
      payload: expect.any(Promise)
    });
  });
});
