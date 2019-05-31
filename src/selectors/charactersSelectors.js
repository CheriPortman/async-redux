//get the state of the characters  []
export const getCharactersState = state => state.characters;
//get all the characters with their state
export const getCharacters = state => getCharactersState(state).list;

export const getCharactersLoading = state => getCharactersState(state).loading;

export const getCharactersError = state => getCharactersState(state).error;
