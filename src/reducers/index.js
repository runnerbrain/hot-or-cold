import { SET_FEEDBACK } from './../actions';

const initialState = {
  feedback: 'Make-a your guess-a'
};

export const hotOrColdReducer = (state = intialState, action) => {
  if (action.type === SET_FEEDBACK)
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  return state;
};
