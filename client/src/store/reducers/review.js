import {
  SEND_REVIEW
} from '../actions/types';

const initialState = {
  inbox: [],
  review: []
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEND_REVIEW:
      return {
        ...state,
        inbox: [...state.inbox, payload]
      }
    default:
      return state;
  }
}