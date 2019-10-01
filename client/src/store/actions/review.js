import axios from 'axios';

import {
  SEND_REVIEW
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

  }
}