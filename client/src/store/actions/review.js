import axios from 'axios';

import {
  SEND_REVIEW,
  GET_REVIEWS,
  REVIEW_ERROR
} from './types';

export const sendReview = (userId, data) => async dispatch => {
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  try {
    const body = JSON.stringify(data);
    const res = await axios.post(`/api/users/inbox/${userId}`, body, config)
    dispatch({
      type: SEND_REVIEW,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR
    })
  }
}

export const getInbox = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/inbox')
    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR
    })
  }
}