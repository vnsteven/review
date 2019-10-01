import {
  SEND_REVIEW,
  GET_REVIEWS
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
        inbox: [...payload]
      }
    case GET_REVIEWS:
    default:
      return state;
  }
}