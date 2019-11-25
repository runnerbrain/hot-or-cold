import {
  SET_FEEDBACK,
  INCREMENT,
  APPEND_TO_GUESS_LIST,
  NEW_GAME
} from './../actions';

const initialState = {
  feedback: 'Make your guesss..',
  counter: 0,
  guesses: []
};

export const hotOrColdReducer = (state = initialState, action) => {
  if (action.type === SET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }

  if (action.type === INCREMENT) {
    return Object.assign({}, state, {
      counter: state.counter + 1
    });
  }

  if (action.type === APPEND_TO_GUESS_LIST) {
    console.log(state.guesses);
    console.log('from action ' + action.val);

    console.log(state);
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.val]
    });
  }

  if (action.type === NEW_GAME) {
    return initialState;
  }

  return state;
};
