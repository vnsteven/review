import axios from 'axios';

import {
  GET_USERS,
  USER_ERROR
} from './types';

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');

    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: USER_ERROR
    })
  }
}