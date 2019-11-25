export const SET_FEEDBACK = 'SET_FEEDBACK';
export const INCREMENT = 'INCREMENT';
export const APPEND_TO_GUESS_LIST = 'APPEND_TO_GUESS_LIST';
export const NEW_GAME = 'NEW_GAME';

export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const increment = counter => ({
  type: INCREMENT,
  counter
});

export const appendToGuessList = val => ({
  type: APPEND_TO_GUESS_LIST,
  val
});

export const newGame = () => ({
  type: NEW_GAME
});
