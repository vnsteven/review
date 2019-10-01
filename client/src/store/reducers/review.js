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
    case GET_REVIEWS:
      return {
        ...state,
        inbox: [...payload]
      }
    case SEND_REVIEW:
    default:
      return state;
  }
}